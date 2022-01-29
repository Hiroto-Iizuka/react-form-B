export const setYears = () => {
  const dataYears = [];
  
  for (let i = 1920; i <= new Date().getFullYear(); i++) {
    const date = new Date(Date.UTC(i));
    const jc = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {year: 'numeric'}).format(date);
    dataYears.push( {year: i, japaneseCalender: jc} );
  }
  return dataYears;
}

export const years = setYears();

export const setMonths = () => {
  for (let i = 1; i <= 12; i++) {
    const dataMonths = [];
    dataMonths.push(i);
  }
}

export const setDays = () => {
  for (let i = 1; i <= 31; i++) {
    const dataDays = [];
    dataDays.push(i);
  }
}