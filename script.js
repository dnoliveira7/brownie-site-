function fazerPedido(produto, preco) {
    const numero = '5598984832993'; // Seu número WhatsApp (com DDI + DDD)
    const mensagem = `Olá! Quero fazer um pedido:\n🍫 Produto: ${produto}\n💰 Preço: R$ ${preco.toFixed(2)}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
