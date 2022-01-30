const setYears = () => {
  const dataYears = [];
  
  for (let i = 1920; i <= new Date().getFullYear(); i++) {
    const date = new Date(Date.UTC(i));
    const jc = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {year: 'numeric'}).format(date);
    dataYears.push( {year: i, japaneseCalender: jc} );
  }
  return dataYears;
}

export const years = setYears();

const setMonths = () => {
  const dataMonths = [];
  for (let i = 1; i <= 12; i++) {
    dataMonths.push(i);
  }
  return dataMonths;
}

export const months = setMonths();

const setDays = () => {
  const dataDays = [];
  for (let i = 1; i <= 31; i++) {
    dataDays.push(i);
  }
  return dataDays;
}

export const days = setDays();