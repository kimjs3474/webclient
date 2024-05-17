function openPopup(url) {
    // 팝업 창의 크기를 지정합니다.
    const popupWidth = 500;
    const popupHeight = 400;

    // 화면 크기와 브라우저 창의 위치를 사용하여 중앙 위치를 계산합니다.
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const centerLeft = (windowWidth - popupWidth) / 2;
    const centerTop = (windowHeight - popupHeight) / 2;

    // 팝업 창을 엽니다.
    window.open(
        url,               // URL 파라미터 사용
        'PopupWindow',     // 팝업 창의 이름
        `width=${popupWidth}, height=${popupHeight}, left=${centerLeft}, top=${centerTop}`  // 팝업 창의 크기 및 위치
    );
    return false;  // 링크의 기본 동작 방지
}