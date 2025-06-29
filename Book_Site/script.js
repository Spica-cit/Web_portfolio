document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ページリロードを防ぐ

    // 入力内容を取得（後でAPIなどに送る時に使う）
    const formData = new FormData(form);
    const name = formData.get("name");

    // 送信完了メッセージを表示
    form.innerHTML = `
      <h2>送信完了</h2>
      <p>${name} さん、無料体験予約を受け付けました。</p>
      <p>担当者より折り返しご連絡いたします。</p>
    `;
  });
});
