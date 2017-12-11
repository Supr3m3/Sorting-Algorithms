'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  'use strict';

  var _this = this;

  var bubbleSort = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(arr, vizitor) {
      var len, i, j, temp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              len = arr.length;
              i = len - 1;

            case 2:
              if (!(i >= 0)) {
                _context.next = 17;
                break;
              }

              j = 1;

            case 4:
              if (!(j <= i)) {
                _context.next = 14;
                break;
              }

              if (!(arr[j - 1] > arr[j])) {
                _context.next = 11;
                break;
              }

              temp = arr[j - 1];

              arr[j - 1] = arr[j];
              arr[j] = temp;
              _context.next = 11;
              return vizitor(arr);

            case 11:
              j++;
              _context.next = 4;
              break;

            case 14:
              i--;
              _context.next = 2;
              break;

            case 17:
              return _context.abrupt('return', arr);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function bubbleSort(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var selectionSort = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(arr, visitor) {
      var minIdx, temp, len, i, j;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              len = arr.length;
              i = 0;

            case 2:
              if (!(i < len)) {
                _context2.next = 13;
                break;
              }

              minIdx = i;
              for (j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                  minIdx = j;
                }
              }
              temp = arr[i];
              arr[i] = arr[minIdx];
              arr[minIdx] = temp;
              _context2.next = 10;
              return visitor(arr);

            case 10:
              i++;
              _context2.next = 2;
              break;

            case 13:
              return _context2.abrupt('return', arr);

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function selectionSort(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var insertionSort = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(arr, visitor) {
      var len, i, tmp, j;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              len = arr.length;
              i = 1;

            case 2:
              if (!(i < len)) {
                _context3.next = 18;
                break;
              }

              tmp = arr[i]; //Copy of the current element.
              /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/

              j = i - 1;

            case 5:
              if (!(j >= 0 && arr[j] > tmp)) {
                _context3.next = 12;
                break;
              }

              //Shift the number
              arr[j + 1] = arr[j];
              _context3.next = 9;
              return visitor(arr);

            case 9:
              j--;
              _context3.next = 5;
              break;

            case 12:
              //Insert the copied number at the correct position
              //in sorted part.
              arr[j + 1] = tmp;
              _context3.next = 15;
              return visitor(arr);

            case 15:
              i++;
              _context3.next = 2;
              break;

            case 18:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function insertionSort(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var swap = function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(arr, i, j, visitor) {
      var temp;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              temp = arr[i];

              arr[i] = arr[j];
              arr[j] = temp;
              _context4.next = 5;
              return visitor(arr);

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function swap(_x7, _x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();

  var partition = function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(arr, pivot, left, right, visitor) {
      var pivotValue, partitionIndex, i;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              pivotValue = arr[pivot], partitionIndex = left;
              i = left;

            case 2:
              if (!(i < right)) {
                _context5.next = 10;
                break;
              }

              if (!(arr[i] < pivotValue)) {
                _context5.next = 7;
                break;
              }

              _context5.next = 6;
              return swap(arr, i, partitionIndex, visitor);

            case 6:
              partitionIndex++;

            case 7:
              i++;
              _context5.next = 2;
              break;

            case 10:
              _context5.next = 12;
              return swap(arr, right, partitionIndex, visitor);

            case 12:
              return _context5.abrupt('return', partitionIndex);

            case 13:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function partition(_x11, _x12, _x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();

  var _quickSort = function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(arr, left, right, visitor) {
      var len, pivot, partitionIndex;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              len = arr.length;

              if (!(left < right)) {
                _context6.next = 10;
                break;
              }

              pivot = right;
              _context6.next = 5;
              return partition(arr, pivot, left, right, visitor);

            case 5:
              partitionIndex = _context6.sent;
              _context6.next = 8;
              return _quickSort(arr, left, partitionIndex - 1, visitor);

            case 8:
              _context6.next = 10;
              return _quickSort(arr, partitionIndex + 1, right, visitor);

            case 10:
              return _context6.abrupt('return', arr);

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function _quickSort(_x16, _x17, _x18, _x19) {
      return _ref6.apply(this, arguments);
    };
  }();

  var shellSort = function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(array, visitor) {
      var gaps, g, gap, i, temp, j;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              gaps = [701, 301, 132, 57, 23, 10, 4, 1];
              g = 0;

            case 2:
              if (!(g < gaps.length)) {
                _context7.next = 24;
                break;
              }

              gap = gaps[g];
              i = gap;

            case 5:
              if (!(i < array.length)) {
                _context7.next = 21;
                break;
              }

              temp = array[i];
              j = i;

            case 8:
              if (!(j >= gap && array[j - gap] > temp)) {
                _context7.next = 15;
                break;
              }

              array[j] = array[j - gap];
              _context7.next = 12;
              return visitor(array);

            case 12:
              j -= gap;
              _context7.next = 8;
              break;

            case 15:
              array[j] = temp;
              _context7.next = 18;
              return visitor;

            case 18:
              i++;
              _context7.next = 5;
              break;

            case 21:
              g++;
              _context7.next = 2;
              break;

            case 24:
              return _context7.abrupt('return', array);

            case 25:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    return function shellSort(_x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }();

  var mergeBottomUp = function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(array, left, step, visitor) {
      var right, end, leftMoving, rightMoving, temp, i, j;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              right = left + step;
              end = Math.min(left + step * 2 - 1, array.length - 1);
              leftMoving = left;
              rightMoving = right;
              temp = [];


              for (i = left; i <= end; i++) {
                if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) && leftMoving < right) {
                  temp[i] = array[leftMoving];
                  leftMoving++;
                } else {
                  temp[i] = array[rightMoving];
                  rightMoving++;
                }
              }

              j = left;

            case 7:
              if (!(j <= end)) {
                _context8.next = 14;
                break;
              }

              array[j] = temp[j];
              _context8.next = 11;
              return visitor(array);

            case 11:
              j++;
              _context8.next = 7;
              break;

            case 14:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    return function mergeBottomUp(_x22, _x23, _x24, _x25) {
      return _ref8.apply(this, arguments);
    };
  }();

  var mergeSort = function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(array, visitor) {
      var step, left;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              step = 1;

            case 1:
              if (!(step < array.length)) {
                _context9.next = 12;
                break;
              }

              left = 0;

            case 3:
              if (!(left + step < array.length)) {
                _context9.next = 9;
                break;
              }

              _context9.next = 6;
              return mergeBottomUp(array, left, step, visitor);

            case 6:
              left += step * 2;
              _context9.next = 3;
              break;

            case 9:
              step *= 2;
              _context9.next = 1;
              break;

            case 12:
              return _context9.abrupt('return', array);

            case 13:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function mergeSort(_x26, _x27) {
      return _ref9.apply(this, arguments);
    };
  }();

  var randomSort = function () {
    var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(v, visitor) {
      var sorted;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              sorted = false;

            case 1:
              if (!(sorted == false)) {
                _context10.next = 8;
                break;
              }

              v = shuffle(v);
              _context10.next = 5;
              return visitor(v);

            case 5:
              sorted = isSorted(v);
              _context10.next = 1;
              break;

            case 8:
              return _context10.abrupt('return', v);

            case 9:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    return function randomSort(_x28, _x29) {
      return _ref10.apply(this, arguments);
    };
  }();

  function shuffle(v) {
    for (var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x) {}
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }

  var functions = {
    bubbleSort: bubbleSort,
    insertionSort: insertionSort,
    selectionSort: selectionSort,
    shellSort: shellSort,
    mergeSort: mergeSort,
    quickSort: function () {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(arr, visitor) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _quickSort(arr, 0, arr.length - 1, visitor);

              case 2:
                return _context11.abrupt('return', _context11.sent);

              case 3:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this);
      }));

      function quickSort(_x30, _x31) {
        return _ref11.apply(this, arguments);
      }

      return quickSort;
    }(),
    randomSort: randomSort
  };

  var stopFlag = true;

  $(document).ready(function () {
    function wait(ms) {
      return new Promise(function (res) {
        return setTimeout(res, ms);
      });
    }

    function equal(arr1, arr2) {
      return !arr1.map(function (elem, k) {
        return arr2[k] === elem;
      }).some(function (v) {
        return v === false;
      });
    }

    function changed(arr1, arr2) {
      return arr1.map(function (elem, k) {
        return arr2[k] !== elem ? k : null;
      }).filter(function (k) {
        return k !== null;
      });
    }

    function generateHtml(arr) {
      var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var html = '';
      arr.forEach(function (elem, k) {
        html += '\n            <div \n                class="Display--sort-element"\n                id="Display--sort-element-' + k + '" \n            >\n                <div \n                    class="Display--sort-block" \n                    style="height: ' + elem * 5 + 'px; "\n                >\n                </div>\n                <div class="Display--sort-number">' + elem + '</div>\n            </div>';
      });
      return html;
    }

    function changeSortElement(k, elem, isChanged) {
      var id = '#Display--sort-element-' + k;
      if (isChanged) {
        $(id + ' .Display--sort-block').addClass('Display-sort-block-changed');
        $(id + ' .Display--sort-number').html(elem);
        $(id + ' .Display--sort-block').css('height', elem * 5 + 'px');
      } else {
        $(id + ' .Display--sort-block').removeClass('Display-sort-block-changed');
      }
    }

    $('#stop-sort').click(function () {
      stopFlag = true;
    });

    $('#start-sort').click(function () {
      stopFlag = false;
      var initial = $('input[name="array"]').val().trim().split(',').map(n=>parseInt(n, 10));
      var waitTime = parseInt($('input[name="wait"]').val(),10);
      var previous = [].concat(_toConsumableArray(initial));
      $('#display-sort').html(generateHtml(initial));
      var type = $("#sort-type option:selected").val();

      var sortFunction = functions[type];
      try {
        sortFunction(initial, function () {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(arr) {
            var changes;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!stopFlag) {
                      _context12.next = 2;
                      break;
                    }

                    throw new Error('Stopped execution');

                  case 2:
                    if (equal(arr, previous)) {
                      _context12.next = 7;
                      break;
                    }

                    changes = changed(arr, previous);

                    arr.forEach(function (elem, k) {
                      changeSortElement(k, elem, changes.indexOf(k) !== -1);
                    });
                    _context12.next = 7;
                    return wait(waitTime);

                  case 7:
                    previous = [].concat(_toConsumableArray(arr));

                  case 8:
                  case 'end':
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          return function (_x33) {
            return _ref12.apply(this, arguments);
          };
        }()).then(console.log, console.log);
      } catch (e) {
        console.log(e);
      }
    });
  });
})();
