//Task-1
//Take four parameters. Multiply the four numbers and then return the result

function multiply (num1,num2,num3,num4){
    const rusult = num1*num2*num3*num4;
    return  rusult;
}
console.log(multiply(5,2,3,4));

//Task-2
//Take a number if the number is odd, multiply it by 2 and return the result. 
//If the number is even, divide it by two and return the result.
function oddEven (number){
   const rusult = number%2;
   if(rusult==1){
    const finalrusult= number*2;
    return finalrusult ;
   }
else if(rusult==0){
    const finalrusult=number/2;
    return finalrusult ;
}
}
console.log(oddEven(9));

//Task-3
//Write a function called make_avg() which will take an array of integers 
//and the size of that array and return the average of those values.
function make_avg(array){
const size=array.length;
let sum =0;
for(let i=0; i<size; i++){
sum += myArray[i];
}
return sum / size;
}
const myArray =[ 7,8,5,6];
console.log(make_avg(myArray));

//Task-4
//Write a function called count_zero() which will take a binary string 
//(Binary string is a string which consists of only 0 and 1) as a parameter 
//and count how many 0’s are there in that string.
function count_zero(array){
	let count_num = array.length;
	let cout= 0;
	
	for (let i = 0; i < count_num; i++ ) {
		if(array[i] == 0){
            cout++;
		}
	}
	
	return cout;
}

const myArray2 = [1, 0, 1, 1, 0, 1, 0];
console.log(count_zero(myArray2));



//Task-5
//Write a function called odd_even() which takes an integer value 
//and tells whether this value is even or odd. If even return Even.
// If odd return Odd
function odd_even(number){
	let odd_even = number%2;
	
	if(odd_even == 0){
		const result = 'Even';
		return result;
	}else if(odd_even == 1){
		const result = 'Odd';
		return result;
	}
}

console.log(odd_even(3));
