export class SortingHelper{

	quickSort(items, left, right) {
		var index;
		if (items.length > 1) {
			index = this.partition(items, left, right);
			if (left < index - 1) {
				this.quickSort(items, left, index - 1);
			}
			if (index < right) {
				this.quickSort(items, index, right);
			}	

    }
    return items;
	}
	
	partition(items, left, right) {
		var pivot   = new Date(items[Math.floor((right + left) / 2)].date), i = left, j = right;
		while (i <= j) {
			while (new Date(items[i]) > pivot) {
				i++;
			}
			while (new Date(items[j]) < pivot) {
				j++;
			}
			if (i <= j) {
				this.swap(items, i, j);
				i++;
				j--;
			}
		}
		return i;
	}

	swap(items, firstIndex, secondIndex){
		var temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	}
}