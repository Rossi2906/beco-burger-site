const cartCount = document.querySelector("#cart-count");
const cartButton = document.querySelector(".cart-button");
const cartMessage = document.querySelector("#cart-message");
const addButtons = document.querySelectorAll(".add-button");

let itemCount = 0;
let total = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    if (!name || !Number.isFinite(price)) {
      return;
    }

    itemCount += 1;
    total += price;
    cartCount.textContent = String(itemCount);
    cartMessage.textContent = `${name} adicionado à sacola.`;
    cartButton.setAttribute(
      "aria-label",
      `Sacola com ${itemCount} ${itemCount === 1 ? "item" : "itens"}`
    );
  });
});

cartButton.addEventListener("click", () => {
  if (itemCount === 0) {
    cartMessage.textContent = "Sua sacola ainda está vazia.";
    return;
  }

  const formattedTotal = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  cartMessage.textContent = `${itemCount} ${itemCount === 1 ? "item" : "itens"} na sacola — ${formattedTotal}.`;
});
