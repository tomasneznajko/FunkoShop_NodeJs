const ItemsService = require('../services/item.service');
const CategoryService = require('../services/category.service');
const LicenceService = require('../services/licence.service');



module.exports = {
    admin: async (req, res) =>{

        let result;
        let success_create = false;

        if(req.query.sku || req.query.product_name || req.query.category_id){
            result = await ItemsService.getItemBy(req.query);
        }

        else{
            if(req.query.create){
                success_create = true;
            }
            result = await ItemsService.getAllItems();
        }
        const {data} = result
        res.render('admin/admin',{
            title: 'Admin - List of items',
            name: 'admin',
            isLogged: req.session.isLogged,
            items: data,
            success_create,
            itemsPerPage: 10,
            currentPage: req.query.page? req.query.page : '1',
            totalPages: Math.ceil(data.length / 10),
            paginationPages: 4
        });
    },

    adminFilter: async (req, res) =>{
        let filter = req.body;
        console.log(filter)
        if(filter.filter !== undefined){
            res.redirect(`/admin?${filter.filter}=${filter.search}`);
        }
        else{
            res.redirect('/admin');
        }
        
    },

    create: async (req, res) =>{
        const { data: categories } = await CategoryService.getAllCategories();
        const { data: licences } = await LicenceService.getAllLicences();

        let error = false;
        let selected = {};
        if(req.query.sku_exists){
            error = true;
            selected.sku = req.query.sku;
            selected.price = parseFloat(req.query.price);
            selected.discount = parseFloat(req.query.discount);
            selected.category = parseInt(req.query.category);
            selected.licence = parseInt(req.query.licence);
            selected.name = req.query.name;
            selected.description = req.query.description;
            selected.stock = parseInt(req.query.stock);
            selected.dues = parseInt(req.query.dues);
        }

        console.log(selected)

        res.render('admin/create',{
            title: 'Admin - Create item',
            name: 'create',
            isLogged: req.session.isLogged,
            categories,
            licences,
            error,
            item: selected
        });
    },

    createItem: async (req, res) =>{
        let item = req.body;
        const {validate} = await ItemsService.validateItem(item)
        if(validate){
            
            item.image_front = 'uploads/' + req.files['image-front'][0].originalname;
            item.image_back = 'uploads/' + req.files['image-back'][0].originalname;
            await ItemsService.createItem(item);
            res.redirect('/admin?create=true');
        }
        else{
            res.redirect(`/admin/create?sku_exists=true&&sku=${item.sku}&&discount=${item.discount}&&category=${item.category}&&licence=${item.licence}&&name=${item.name}
            &&description=${item.description}&&price=${item.price}&&stock=${item.stock}&&dues=${item.dues}`);
        }

        
    },

    edit: async (req, res) =>{
        const { data: categories } = await CategoryService.getAllCategories();
        const { data: licences } = await LicenceService.getAllLicences();
        const { data } = await ItemsService.getItem(req.params.id);
        console.log(data[0])
        res.render('admin/edit',{
            title: 'Admin - Edit item',
            name: 'edit',
            isLogged: req.session.isLogged,
            item: data[0],
            categories,
            licences
        });
    },

    editItem: async (req, res) =>{

        const item = req.body;
        console.log(item)
        await ItemsService.editItem(item, req.params.id, req.files);
        res.redirect('/admin');
    },

    deleteItem: async (req, res) =>{

        await ItemsService.deleteItem(req.params.id);
        res.redirect('/admin');
    }
}


