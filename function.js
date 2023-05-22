// 要素が表示されるかどうかを判定する関数
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    );
}

  // スクロールイベントのハンドラー
function handleScroll() {
    const element = document.querySelector('.fade-in-box');
    if (isElementInViewport(element)) {
        element.classList.add('fade-in');
    }
}

  // スクロールイベントを監視
window.addEventListener('scroll', handleScroll);