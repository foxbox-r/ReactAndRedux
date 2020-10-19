const axios = require( "axios");
const menuUrl = `http://kyungwon-server.kro.kr:8080/meals?school_id=7240393&office_code=D10&date=`;
function getDate(add=0){// 날짜(쿼리스트링용),년,원,일,요일 객체를 반환합니다.
    const today = new Date();
    today.setDate(today.getDate()+add);
    const y = today.getFullYear();//year
    const m = today.getMonth()+1<10?"0"+(today.getMonth()+1):today.getMonth()+1;//month
    const d = today.getDate()<10?"0"+today.getDate():today.getDate();//date
    const hours = today.getHours(); 
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const day = today.getDay();
    const output = {
        queryDate : ""+y+m+d,
        y:y,
        m:m,
        d:d,
        day:day,
        hours:hours,
        minutes:minutes,
        seconds:seconds,
    };
    return output;
}


export const  getMeal = async () =>{
      return await axios.get(menuUrl+getDate().queryDate)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
