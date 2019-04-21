            var button = document.getElementById("countButton");	//кнопка для отправки кол-ва 
			var numberArray = document.getElementsByClassName("number"); 
    		var rowNumbers = document.getElementById("row_numbers");	//область для вывода массива
    		var count = document.getElementById("countInput");	//ввод числа (кол-во элементов массива)
    		var areaInputs = document.getElementById("row_inputs"); //область для вывода input-ов элементов
			button.onclick = printInputs; 
			
			//Функция выводит поля для ввода, предварительно спросив количество чисел в массиве (с проверкой на правильность)
			function printInputs() {
				areaInputs.innerHTML='';
				rowNumbers.innerHTML='';
				if(isNaN(count.value) || (count.value<=0) || (count.value%1>0)) {
						areaInputs.innerHTML="<span class='attention'>Некорректный ввод! Введите количество чисел в массиве (целое положительное число)</span>"
					}
				else {
						for (i=0; i<count.value; i++) {
							areaInputs.innerHTML+='<input type="text" size="3" maxlength="3" class="number input">';
						}
						areaInputs.innerHTML+='<br><input type="button" value="Ввести массив" id="arrayButton"><a href="index.htm"><input type="button" value="Новый массив" id="new"></a>';
						var arrayButton = document.getElementById("arrayButton");
						var form = document.getElementById("forma");
    					form.style.display = 'none';
    					header.textContent = "Введите целочисленные элементы массива размером "+Math.round(count.value);
						arrayButton.onclick = obrabotka;
				}
    		};
    		//функция, обрабатывающая содержимое полей и переносящая в массив валидные данные
    		function obrabotka() {
    			var flag=true;
    			var arr = new Array(parseInt(count.value));
    			for (var i=0; i<arr.length; i++) {
    				if(!isNaN(numberArray[i].value) && (numberArray[i].value%1==0) ) {
    					arr[i] = Number.parseInt(numberArray[i].value);
    				}
    				findIndMax(arr);
    			}

    			
    		}

    		//функция для тестового задания 
    		function findIndMax(arr) {
    			var max = arr[0];
    			var flag=true;
    			var indMax=0;
    			 		for (var i = 0; i < arr.length; i++) {
							if(isNaN(arr[i]) || (arr[i]%1>0)) {
								flag=false;
								break;
							} else {
    			 		 		if(max < arr[i]) {
    			 		 			max =  arr[i];
    			 		 			indMax = i;
    			 		 		}
    			 		 	} 
    				 	};
    			 	
    			if(flag==true) {
    				rowNumbers.innerHTML='<span class="attention success">Индекс максимального элемента, если считать от нуля, равен = '+indMax+'  '+'</span>'; //return indMax
    			}
    			else {
    				rowNumbers.innerHTML='<span class="attention">Некорректный ввод элементов целочисленного массива! </span>';
    			}
    		};