import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue: Float = 300;
  // currentValue := 100;

  stable var startTime = Time.now();

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(arg : Float) : () {
    if (arg <= currentValue){
      currentValue -= arg;
      Debug.print(debug_show(currentValue));
    }
    else{
      Debug.print("error");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func compaund() {
    let currentTime = Time.now();
    let timeElapsed = (currentTime - startTime) / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  }

}