#HOJ_1302  

今天因为要去江北那点有点事，下午回来又睡了一觉，所以就只刷了一道水题。  

昨天晚上九江起了很大的雾，今天中午还没散去，车子在大桥中间的时候，前方和后方的路都看不见了，这种感觉很有意思，好像我们就是行驶在一段凭空出现的道路上。  

还是说水题吧。  

这道题很简单，就是判断一个数是不是可以拆散成阶乘的和，本来想把可能性都列出来打表的，结果发现还不如用贪心呢，需要注意的是，0的阶乘是1，一定要带上，我就是这样```WA```了好几次。。。  

	#include <iostream>
	using namespace std;

	int main(){
  		int fact[12], tmp = 1, n;
  		fact[0] = 1;
  		for(int i = 1; i < 12; i++){
    		tmp *= i;
    		fact[i] = tmp;
  		}
  		while((cin >> n) && n >= 0){
    		if(n == 0)
      			cout << "NO" << endl;
    		else{
      			for(int i = 11; i >= 0; i--){
        			if(n >= fact[i])
          				n -= fact[i];
      			}
      			if(n == 0)
        			cout << "YES" << endl;
      			else
        			cout << "NO" << endl;
    		}
  		}
	}
