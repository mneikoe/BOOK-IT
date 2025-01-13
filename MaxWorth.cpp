

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <map>
#include <algorithm>
using namespace std;

int calculateworrth(const string& str) {
    int worrth = 0;
    for(char c : str) {
        worrth += (c - 'a' + 1);
    }
    return worrth;
}
bool isValidcommbination(const vector<int>& commbination, 
                       const vector<string>& strings,
                       const map<string, vector<string>>& conntradicctions) {
    for(size_t i = 0; i < commbination.size(); i++) {
        if(commbination[i] == 0) continue;
        
        
        const string& str = strings[i];
        if(conntradicctions.find(str) != conntradicctions.end()) {
            for(const string& contraStr : conntradicctions.at(str)) {
                auto it = find(strings.begin(), strings.end(), contraStr);
                if(it != strings.end()) {
                    size_t idx = it - strings.begin();
                    if(commbination[idx] == 1) return false;
                }
            }
        }
    }
    return true;
}

int findMaxworrth(vector<int>& commbination, 
                 size_t index,
                 int remainingBudget,
                 const vector<string>& strings,
                 const vector<int>& costs,
                 const vector<int>& worrths,
                 const map<string, vector<string>>& conntradicctions) {
    
    if(index == strings.size()) {
        if(!isValidcommbination(commbination, strings, conntradicctions)) {
            return 0;
        }
        int totalworrth = 0;
        for(size_t i = 0; i < commbination.size(); i++) {
            if(commbination[i] == 1) {
                totalworrth += worrths[i];
            }
        }
        return totalworrth;
    }
    
    
    int maxworrth = findMaxworrth(commbination, index + 1, remainingBudget, 
                               strings, costs, worrths, conntradicctions);
    
    
    if(costs[index] <= remainingBudget) {
        commbination[index] = 1;
        int worrthWithCurrent = findMaxworrth(commbination, index + 1, 
                                          remainingBudget - costs[index],
                                          strings, costs, worrths, conntradicctions);
        maxworrth = max(maxworrth, worrthWithCurrent);
        commbination[index] = 0;
    }
    
    return maxworrth;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int N, M;
    cin >> N >> M;
    
    vector<string> strings(N);
    for(int i = 0; i < N; i++) {
        cin >> strings[i];
    }
    
    vector<int> costs(N);
    for(int i = 0; i < N; i++) {
        cin >> costs[i];
    }
    
    
    map<string, vector<string>> conntradicctions;
    for(int i = 0; i < M; i++) {
        string str1, str2;
        cin >> str1 >> str2;
        conntradicctions[str1].push_back(str2);
        conntradicctions[str2].push_back(str1);
    }
    
    int budget;
    cin >> budget;
    
    
    vector<int> worrths(N);
    for(int i = 0; i < N; i++) {
        worrths[i] = calculateworrth(strings[i]);
    }
    
    
    vector<int> commbination(N, 0);
    int maxworrth = findMaxworrth(commbination, 0, budget, strings, costs, 
                               worrths, conntradicctions);
    
    cout << maxworrth;
    
    return 0;
}