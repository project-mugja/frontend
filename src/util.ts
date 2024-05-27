export function formatDateString(input: string): string {
    // Date 객체로 변환
    const date = new Date(input);
  
    // 연도, 월, 일 추출
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = date.getDate().toString().padStart(2, '0');
  
    // yyyy.mm.dd 형식으로 변환
    return `${year}.${month}.${day}`;
  }