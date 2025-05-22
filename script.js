function fazerPedido(produto, preco) {
    const numero = '5598984832993'; // Seu número de WhatsApp já configurado
    const mensagem = `Olá! Quero fazer um pedido:\n🍫 Produto: ${produto}\n💰 Preço: R$ ${preco},00`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
