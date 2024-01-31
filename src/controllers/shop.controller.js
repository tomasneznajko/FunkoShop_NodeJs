const ItemsService = require('../services/item.service');

module.exports = {
    shop: async (req, res) =>{
        
        const { data } = await ItemsService.getAllItems();

        res.render('tienda/shop',{
            title: 'Shop',
            name: 'shop',
            items: data,
            isLogged: req.session.isLogged,
            itemsPerPage: 9,
            currentPage: req.query.page? req.query.page : '1',
            totalPages: 40,
            paginationPages: 4
        });
      },
    shopFilter: async (req, res) =>{
        
        const queryParams = ""
        let filter = req.body;

        
        res.redirect(`/shop${queryParams}`)
      },
    item: async (req, res) =>{
        const {data} = await ItemsService.getItem(req.params.id);
        if (!data[0]) {
            res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
        }
        res.render('tienda/item',{
            title: 'Shop - Item',
            name: 'item',
            glide: 'Productos relacionados',
            item: data[0],
            isLogged: req.session.isLogged
        });
    },
    addItem: async (req, res) =>{
    },
    cart: async (req, res) =>{
        res.render('tienda/cart',{
            title: 'Shop - Cart',
            name: 'cart',
            isLogged: req.session.isLogged
        });
    },
    addToCart: async (req, res) =>{
        
    }
}
