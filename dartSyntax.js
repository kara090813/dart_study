String name = 'Lee Sang Yun';
int year = 1997;
double hei = 173.8;
List<String> other = ['항과고','국방부','남자'];
Map addInfo = {
  'age':23,
  'oth':'사람',
  'jsk':['mcrc','kokbang']
};

/////////////////////////////////////////////////////

bool isEven(int x){
  if(x%2 == 0){
    return true;
  }
  else{
    return false;
  }
}

List<int> getEvenNumbers(Iterable<int> numbers){
    var evenNumbers = <int>[];
  
  for(var i in numbers){
    if(isEven(i)) evenNumbers.add(i);
  }
  
  return evenNumbers;
}

main(){
  var numbers = List.generate(10,(i)=>i+1);
  print(getEvenNumbers(numbers));
}

/////////////////////////////////////////////////////


main(){
  print('a single quoted String');
  print("a double quoted String");
  
  print("cat" + "dog");
  

  var pi = 3.14;
  print('pi is $pi');
  print('tau is ${pi*2}');
}

//////////////////////////////////////////////
class Car{
  int? seats = null;
  String? color = null;
  
  Car(int sts, [String clr='black']){
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats\ncolor:$color');
  }
}

main(){
  Car newCar = Car(4,'red');
  
  newCar.printVars();
}

//////////////////////////////////////////////

void main() {
  String name = '이상윤';
  bool trueFalse = name == '이상윤';
  bool tf2 = name.isNotEmpty;
  assert(tf2);
  print(tf2);
}

//////////////////////////////////////////////


void main() {
  List<num> numList = [1, 2, 3];
  List<num> numList2 = [...numList,4,5,6];
  
  numList2.add(0);
  print(numList2);
  
  Set<num> numSet = {1,2,3,3}; //중복된 엘리멘트는 삭제됨
  print(numSet);
}

//////////////////////////////////////////////


void main() {
  Map<num, String> mapD = {0:'zero', 1:'원', 2:'둘'};
  print(mapD[1]);
}

//////////////////////////////////////////////

void main(){
  
  calcul c = calcul(1,'/',5);
  print(c.go());
  
}


class calcul{
  int num1 = 0;
  int num2 = 0;
  String bo = '';
  
  calcul(int i1, String b, int i2){
    this.num1 = i1;
    this.num2 = i2;
    this.bo = b;
  }
   num go(){
    num result = 0;
    
    switch(bo){
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '/':
        result = num1/num2;
        break;
      case '*':
        result = num1 * num2;
        break;
    }
    return result;
  }
 
}

//////////////////////////////////////////////
//null saftey
void main(){
  
  calcul c = calcul('+',5);
  print(c.go());
  
}


class calcul{
  int? num1 = null;
  int? num2 = null;
  String bo = '';
  
  calcul( String b, int i2){
    this.num2 = i2;
    this.bo = b;
  }
   num go(){
    num result = 0;
    
    switch(bo){
      case '+':
        result = (num1??1) + num2!;
        break;
      case '-':
        result = num1! - num2!;
        break;
      case '/':
        result = num1/num2!;
        break;
      case '*':
        result = num1! * num2!;
        break;
    }
    return result;
  }
 
}

//////////////////////////////////////////////

void main(){
  print(newNum(1));
  print(twoNum());
  print(lsy(1,2));
  print(named(5,b:5));
}

int newNum([int? number]){ 
  return 123+(number??0); 
}

int twoNum([int number=0]){ 
  return 123+(number??0); 
}

int lsy(int a, [int b=0]){
  return 10+a+b;
}

int named(int a, {int? b}){
  return 10+a+(b??0);
}

//////////////////////////////////////////////

void main() {
  String name = 'SangYun';
  int number = (name.contains('ang'))?7 : -7;
  print(number);
}

//////////////////////////////////////////////

void main() {
  int number = 4;
  switch(number){
    case 0:{
      print('this is 0');
      break;
    }
    case 1:{
      print('this is 1');
      break;
    }
    case 2:
    case 66:{
      print('this is 2');
      break;
    }
    default:{
      print('this is default');
    }
  }
}

//////////////////////////////////////////////
// named constructor

void main() {
  Car myCar = Car('pink', 8);
  Car basicCar = Car.basic();
  Car fullOptionCar = Car.fullOption(seats: 6);
  
}

class Car{
  String? color;
  int? wheels;
  int? seats;
  
  Car(this.color, this.wheels);
  Car.basic(){
    color = 'red';
      wheels = 4;
  }
  
  Car.fullOption({this.seats = 4}){
    color = 'rainbow';
    wheels = 16;
  }
  
  int speed(int accel){
    return accel *2;
  }
}
  
  
//////////////////////////////////////////////


void main() {
  Car myCar = Car('pink', 8);
  Car basicCar = Car.basic('red');
  Car fullOptionCar = Car.fullOption(seats: 6);
  
}

class Car{
  String? color;
  int? wheels;
  int? seats;
  
  Car(this.color, this.wheels);
  Car.basic(String clr, {int wheels=4}) : this(clr, wheels)
  
  int speed(int accel){
    return accel *2;
  }
}
  
//////////////////////////////////////////////
//initialize
void main() {
  Car myCar = Car('pink', 8);
  Car basicCar = Car.basic('red');
  Car fullOptionCar = Car.fullOption(seats: 6);
  
}

class Car{
  final String? color;
  int? wheels;
  int? seats;
  
  Car(String clr, int wheels):color=clr{
    
  }
 
  int speed(int accel){
    return accel *2;
  }
}
  
  
