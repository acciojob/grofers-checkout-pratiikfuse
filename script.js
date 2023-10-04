const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
  let prices  = document.getElementsByClassName("price");
	for(let i = 0;i<prices.length;i++)
		{
			sum+= parseInt(prices[i].innerText);
		}
	let tr = document.createElement("tr");
	tr.innerHTML = `<td id="ans">${sum}</td>`
	let table = document.getElementsByTagName("table")[0];
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

