const checkedArr = [true, false, false, true];
const normalArr = [{"fileId": '1', "name":'sd'},
{"fileId": '2', "name":'sdd'},
{"fileId": '3', "name":'dfd'},
{"fileId": '4', "name":'ssssd'}
];
const newDataArr =[];
const deletedArr = [];
normalArr.map((ele,i)=>{
	if (checkedArr[i] === true) {
	newDataArr.push(ele)
    } else {
        deletedArr.push(ele);
    }
})
console.log(newDataArr);
console.log('deletedArr', deletedArr);
console.log(deletedArr[0].name)