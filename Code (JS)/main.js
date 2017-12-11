(function () {
'use strict';

async function bubbleSort(arr, vizitor) {
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        await vizitor(arr);
      }
    }
  }
  return arr;
}

async function selectionSort(arr, visitor){
  var minIdx, temp,
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
      if(arr[j]<arr[minIdx]){
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    await visitor(arr);
  }
  return arr;
}

async function insertionSort(arr, visitor) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var tmp = arr[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
    for (var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
      //Shift the number
      arr[j + 1] = arr[j];
      await visitor(arr);
    }
    //Insert the copied number at the correct position
    //in sorted part.
    arr[j + 1] = tmp;
    await visitor(arr);
  }
}

async function swap(arr, i, j, visitor){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  await visitor(arr);
}

async function partition(arr, pivot, left, right, visitor){
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      await swap(arr, i, partitionIndex, visitor);
      partitionIndex++;
    }
  }
  await swap(arr, right, partitionIndex, visitor);
  return partitionIndex;
}

async function quickSort(arr, left, right, visitor){
  var len = arr.length,
      pivot,
      partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = await partition(arr, pivot, left, right, visitor);

    //sort left and right
    await quickSort(arr, left, partitionIndex - 1, visitor);
    await quickSort(arr, partitionIndex + 1, right, visitor);
  }
  return arr;
}

async function shellSort(array, visitor) {
  var gaps = [701, 301, 132, 57, 23, 10, 4, 1];
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for(var i = gap; i < array.length; i++) {
      var temp = array[i];
      for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
        await visitor(array);
      }
      array[j] = temp;
      await (visitor);
    }
  }
  return array;
}

async function mergeBottomUp(array, left, step, visitor) {
  var right = left + step;
  var end = Math.min(left + step * 2 - 1, array.length - 1);
  var leftMoving = left;
  var rightMoving = right;
  var temp = [];

  for (var i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
      leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;
    } else {
      temp[i] = array[rightMoving];
      rightMoving++;
    }
  }

  for (var j = left; j <= end; j++) {
    array[j] = temp[j];
    await visitor(array);
  }
}

async function mergeSort(array, visitor) {
  var step = 1;
  while (step < array.length) {
    var left = 0;
    while (left + step < array.length) {
      await mergeBottomUp(array, left, step, visitor);
      left += step * 2;
    }
    step *= 2;
  }
  return array;
}

function shuffle (v) {
  for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
  return v;
}

function isSorted(v){
  for(var i=1; i<v.length; i++) {
    if (v[i-1] > v[i]) { return false; }
  }
  return true;
}

async function randomSort(v, visitor){
  var sorted = false;
  while(sorted == false){
    v = shuffle(v);
    await visitor(v);
    sorted = isSorted(v);
  }
  return v;
}

const functions = {
  bubbleSort,
  insertionSort,
  selectionSort,
  shellSort,
  mergeSort,
  quickSort: async (arr, visitor) => { return await quickSort(arr, 0, arr.length - 1, visitor)},
  randomSort,
};

var stopFlag = true;

$(document).ready(function() {
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  function equal(arr1, arr2) {
    return !arr1.map((elem, k) => arr2[k] === elem).some(v => v === false);
  }

  function changed(arr1, arr2) {
    return arr1.map((elem, k) => arr2[k] !== elem ? k : null).filter(k => k !== null);
  }

  function generateHtml(arr, changes = []) {
    var html = '';
    arr.forEach((elem,k) => {
      html += `
            <div 
                class="Display--sort-element"
                id="Display--sort-element-${k}" 
            >
                <div 
                    class="Display--sort-block" 
                    style="height: ${elem * 5}px; "
                >
                </div>
                <div class="Display--sort-number">${elem}</div>
            </div>`;
    });
    return html;
  }

  function changeSortElement(k, elem, isChanged) {
    var id = `#Display--sort-element-${k}`;
    if (isChanged) {
      $(`${id} .Display--sort-block`).addClass('Display-sort-block-changed');
      $(`${id} .Display--sort-number`).html(elem);
      $(`${id} .Display--sort-block`).css('height', `${elem * 5}px`);
    } else {
      $(`${id} .Display--sort-block`).removeClass('Display-sort-block-changed');
    }
  }

  $('#stop-sort').click(() => {
    stopFlag = true;
  });

  $('#start-sort').click(() => {
    stopFlag = false;
    var initial = $('input[name="array"]').val().trim().split(',').map(n=>parseInt(n, 10));
    var previous = [...initial];
    $('#display-sort').html(generateHtml(initial));
    const type = $( "#sort-type option:selected" ).val();

    const sortFunction = functions[type];
    try {
      sortFunction(initial, async function(arr) {
        if (stopFlag) {
          throw new Error('Stopped execution');
        }

        if (!equal(arr, previous)) {
          var changes = changed(arr, previous);
          arr.forEach((elem, k) => {
            changeSortElement(k, elem, changes.indexOf(k) !== -1);
          });
          await wait(500);
        }
        previous = [...arr];
      }).then(console.log, console.log);
    } catch (e) {
      console.log(e);
    }

  });
});

}());
