const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 150;

const text = 'Welcome to my Guitar Page';
const fontSize = '100'; // 글자 크기 설정
ctx.font = `${fontSize}px Arial`;
ctx.textBaseline = 'middle'; 

const textWidth = ctx.measureText(text).width; // 텍스트 너비 측정
let x = canvas.width; // 텍스트의 초기 x 위치
const dx = -4; // x축 이동 속도를 음수로 설정하여 왼쪽으로 이동

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 지우기

    // 텍스트 위치 업데이트 및 그리기
    ctx.fillText(text, x, canvas.height / 2);

    // x 위치 업데이트
    x += dx;

    // 텍스트가 왼쪽으로 완전히 사라지면, 오른쪽에서 다시 시작
    if (x + textWidth < 0) {
        x = canvas.width;
    }

    requestAnimationFrame(draw); // 다음 프레임을 위해 draw 함수 호출
}

draw(); // 애니메이션 시작

function resizeCanvas() {
    canvas.width = window.innerWidth; // 캔버스 너비를 창 너비로 설정
    canvas.height = 150; // 캔버스 높이를 높여서 글자가 짤리지 않도록 조정
    ctx.font = `${fontSize}px Arial`; // 캔버스 크기 변경 시 글자 크기 재설정
    ctx.textBaseline = 'middle'; // 텍스트 기준선 재설정
    x = canvas.width; // 창 크기가 변할 때 텍스트 위치를 캔버스 오른쪽 끝으로 재설정
}

// 캔버스 크기 초기화 및 창 크기 변경 이벤트 처리
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
