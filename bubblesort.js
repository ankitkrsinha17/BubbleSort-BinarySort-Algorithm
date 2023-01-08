// Bubblesort Algorithm
let arr=[23,20,9,90,70,72,10];
let i,j,n;
n=arr.length;
console.log(n);
for(i=0;i<n;i++)
{
    for(j=0;j<n-1;j++){
    if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
}}
console.log(arr);
// Binary Sort Algorithm

let search_term=5;//9 10 20 23 70 72 90
let position=-1,found=false;

let beg=0,end=n-1,mid;
while(beg<=end)
    {
        mid=(beg+end)/2;

    if(search_term<=arr[mid])
    {
        end=mid-1;
        if(search_term==arr[mid]){
            position = mid;
            found=true;
        }
        
    }
    else{
        beg=mid+1;
    }
    
}
if(found)
console.log("Element found at: "+mid);
else
console.log("Element not found");