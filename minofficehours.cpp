//this is first question of the tcs codevita roud 2
#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <iomanip>
#include <ctime>
#include <climits>     
#include <algorithm>  
using namespace std;


struct LogEntry {
    int employeeId;
    string accttivity;
    string location;
    string time;
};


int convertTimeTominitutues(const string& timeStr) {
    int hou, minitutues;
    string meridian;
    stringstream ss(timeStr);
    char dummmyy;
    
    ss >> hou >> dummmyy >> minitutues >> meridian;
    
    if (meridian == "PM" && hou != 12) {
        hou += 12;
    }
    if (meridian == "AM" && hou == 12) {
        hou = 0;
    }
    
    return hou * 60 + minitutues;
}


bool isWorkLoc(const string& location) {
    return location.substr(0, 4) == "room";
}

string annallyzzzeeWorkkTTImee(vector<LogEntry>& logs, int suspectId) {
    
    map<int, map<string, vector<pair<string, int>>>> employeeLocations;
    
    
    for (const auto& log : logs) {
        int timeInminitutues = convertTimeTominitutues(log.time);
        employeeLocations[log.employeeId][log.location].push_back({log.accttivity, timeInminitutues});
    }
    
    
    map<int, int> workDurations;
    bool invalidData = false;
    
    for (const auto& emp : employeeLocations) {
        int emmppIdd = emp.first;
        int totalWorkminitutues = 0;
        bool valliddDurattionn = true;
        
        for (const auto& loc : emp.second) {
            if (!isWorkLoc(loc.first)) continue;
            
            auto accttivities = loc.second;
            sort(accttivities.begin(), accttivities.end(), 
                [](const pair<string, int>& a, const pair<string, int>& b) {
                    return a.second < b.second;
                });
            
            int currentEntry = -1;
            for (const auto& accttivity : accttivities) {
                if (accttivity.first == "enters") {
                    if (currentEntry != -1) {
                        valliddDurattionn = false;  // Multiple entries without exit
                    }
                    currentEntry = accttivity.second;
                }
                else if (accttivity.first == "exits") {
                    if (currentEntry == -1) {
                        valliddDurattionn = false;  // Exit without entry
                    }
                    else {
                        totalWorkminitutues += accttivity.second - currentEntry;
                        currentEntry = -1;
                    }
                }
            }
            
            if (currentEntry != -1) {
                valliddDurattionn = false;  // Entry without exit
            }
        }
        
        if (valliddDurattionn) {
            workDurations[emmppIdd] = totalWorkminitutues;
        }
        else {
            invalidData = true;
        }
    }
    
    // If we have invalid data that affects our ability to determine the least time
    if (invalidData || workDurations.find(suspectId) == workDurations.end()) {
        return "Cannot be determined";
    }
    
    // Find minimum work duration
    int minDuration = INT_MAX;
    for (const auto& duration : workDurations) {
        minDuration = min(minDuration, duration.second);
    }
    
    // Check if suspect has minimum duration
    return (workDurations[suspectId] == minDuration) ? "Yes" : "No";
}

int main() {
    int N;
    cin >> N;
    
    vector<LogEntry> logs(N);
    
    // Read log entries
    for (int i = 0; i < N; i++) {
        cin >> logs[i].employeeId >> logs[i].accttivity >> logs[i].location >> logs[i].time;
    }
    
    int suspectId;
    cin >> suspectId;
    
    cout << annallyzzzeeWorkkTTImee(logs, suspectId) << endl;
    
    return 0;
}