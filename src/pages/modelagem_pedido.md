!TODO: aviso, isso é apenas um protótipo que serve como mapa para como os dados serão implementados depois

table pedido{
  id int32 auto-increment;
  pedido varchar(300) not_null; /* string que vai conter dados do carrinho */
  hora_pedido time not_null; /* horario em que foi realizado o pedido, sem dia pq o plano é os dados serem excluidos a cada 24hrs */
  pagamento varchar(100) not_null; /* vai informar como foi ou vai ser feito o pagamento, no caso de ser pago na entrega com dinheiro vai informar também o troco necessário */
  preco double not_null; 
}