const board = {
	firstRow: [],
	secondRow: [],
	thirdRow: []
}

let player = 1;

const isWinner = collection => collection.O === 3 || collection.X === 3;


const checkForWinner = () => {
	let collection = {};
  $('#first-row > .cell').each(function() {
    let icon = $(this).html();
    collection[icon] = collection[icon] || 0;
    collection[icon]++;
  });

  if(isWinner(collection)) {
  	return true;
  }
  
  collection = {};
  $('#second-row > .cell').each(function() {
    let icon = $(this).html();
    collection[icon] = collection[icon] || 0;
    collection[icon]++;
  });

  if(isWinner(collection)) {
  	return true;
  }
  collection = {};
  $('#third-row > .cell').each(function() {
    let icon = $(this).html();
    collection[icon] = collection[icon] || 0;
    collection[icon]++;
  });

  if(isWinner(collection)) {
  	return true;
  }
  collection = {};

  for(let i = 0; i < 3; i++) {
    let top = $('#first-row > .cell')[i].html();
    let mid = $('#second-row > .cell')[i].html();
    let bot = $('#third-row > .cell')[i].html();
    collection[top] = collection[top] || 0;
    collection[top]++;
    collection[mid] = collection[mid] || 0;
    collection[mid]++;
    collection[bot] = collection[bot] || 0;
    collection[bot]++;

	  if(isWinner(collection)) {
	  	return true;
	  }

	  collection = {};
  }


  let diagMajorTop = $('#first-row > .cell')[0].html();
  let diagMajorMid = $('#second-row > .cell')[1].html();
  let diagMajorBot = $('#third-row > .cell')[2].html();

  collection[diagMajorTop] = collection[top] || 0;
  collection[diagMajorTop]++;
  collection[diagMajorMid] = collection[mid] || 0;
  collection[diagMajorMid]++;
  collection[diagMajorBot] = collection[bot] || 0;
  collection[diagMajorBot]++;

  if(isWinner(collection)) {
  	return true;
  }

  collection = {};

  let diagMinorTop = $('#first-row > .cell')[2].html();
  let diagMinorMid = $('#second-row > .cell')[1].html();
  let diagMinorBot = $('#third-row > .cell')[0].html();
  
  collection[diagMinorTop] = collection[top] || 0;
  collection[diagMinorTop]++;
  collection[diagMinorMid] = collection[mid] || 0;
  collection[diagMinorMid]++;
  collection[diagMinorBot] = collection[bot] || 0;
  collection[diagMinorBot]++;

  if(isWinner(collection)) {
  	return true;
  }
};


$('.cell').on('click', function(){
  if(player === 1) {
  	$(this).addClass('circle');
  	$(this).html('O');

  	checkForWinner();
  	player = 2;
  } else {
  	$(this).addClass('cross');
  	$(this).html('X');

  	checkForWinner();
  	player = 1;
  }
});