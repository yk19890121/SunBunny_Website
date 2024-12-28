// サイト準備完了メッセージ
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sun Bunnyサイトが準備できました！');

    // フォームの送信イベントを処理
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // ページのリロードを防ぐ

        // フォームデータの取得
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // 確認メッセージを表示
        if (name && email && message) {
            alert(`ありがとうございます、${name}さん！\nお問い合わせ内容を確認しました。\nメールアドレス: ${email}\nメッセージ: ${message}`);
        } else {
            alert('すべてのフィールドを入力してください。');
        }
    });

    // スムーズスクロールを設定
    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
});
