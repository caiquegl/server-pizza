const express = require("express");
const router = express.Router();

const userController = require("../controllers/usuarioController");
const pedidoController = require("../controllers/pedidoController");




/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/cadastro", userController.create );
router.post("/logando", userController.logando);
router.post("/todosUsuarios", userController.todosUsuarios);
router.post("/usuarioPorCPF", userController.usuarioPorCPF);

router.post("/pedindo", pedidoController.create );
router.post("/todosPedidos", pedidoController.todosPedidos );
router.post("/pedidoPorCPF", pedidoController.pedidoPorCPF );
router.post("/pedidoId", pedidoController.pedidoId );
router.post("/atualizarPedido", pedidoController.atualizarPedido );
router.post("/countPreparando", pedidoController.countPreparando );
router.post("/removerPedido", pedidoController.removerPedido );
router.post("/search", pedidoController.search );
router.post("/pedidosHoje", pedidoController.pedidosHoje );
router.post("/agendados", pedidoController.agendados );
router.post("/infoPedidoUser", pedidoController.infoPedidoUser );















module.exports = router;
