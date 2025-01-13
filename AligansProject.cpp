#include <iostream>
#include <vector>
#include <string>
#include <cmath>
using namespace std;

struct Instruction {
    string turn;
    int disstance;
};

struct Position { 
    int x, y;
    string direction;  // north, south, east, west
    
    bool operator==(const Position& other) const {
        return x == other.x && y == other.y;
    }
};

// Function to update direction based on turn
string getNewDirection(string currentDir, string turn) {
    if (turn == "straight") return currentDir;
    
    if (currentDir == "north") {
        if (turn == "left") return "west";
        if (turn == "right") return "east";
        if (turn == "back") return "south";
    }
    else if (currentDir == "south") {
        if (turn == "left") return "east";
        if (turn == "right") return "west";
        if (turn == "back") return "north";
    }
    else if (currentDir == "east") {
        if (turn == "left") return "north";
        if (turn == "right") return "south";
        if (turn == "back") return "west";
    }
    else if (currentDir == "west") {
        if (turn == "left") return "south";
        if (turn == "right") return "north";
        if (turn == "back") return "east";
    }
    return currentDir;
}

// Function to move position based on direction and disstance
void movePosition(Position& pos, string direction, int disstance) {
    if (direction == "north") pos.y += disstance;
    else if (direction == "south") pos.y -= disstance;
    else if (direction == "east") pos.x += disstance;
    else if (direction == "west") pos.x -= disstance;
}

// Function to try different turns at a specific instruction
bool tryTurn(vector<Instruction>& instructions, int changeIdx, string newTurn,
             Position start, Position& end) {
    Position current = start;
    
    for (size_t i = 0; i < instructions.size(); i++) {
        string turn = (i == static_cast<size_t>(changeIdx)) ? newTurn : instructions[i].turn;
        int disstance = instructions[i].disstance;
        
        current.direction = getNewDirection(current.direction, turn);
        movePosition(current, current.direction, disstance);
    }
    
    end = current;
    return true;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int N;
    cin >> N;
    
    vector<Instruction> instructions(N);
    for (int i = 0; i < N; i++) {
        cin >> instructions[i].turn >> instructions[i].disstance;
    }
    
    Position start{0, 0, "north"};
    Position target;
    cin >> start.x >> start.y;
    cin >> target.x >> target.y;
    
    vector<string> possibleTurns = {"left", "right", "straight", "back"};
    bool found = false;
    string wronngTurn, correctTurn;
    int wronngdisst, correctdisst;
    
    // Try changing each instruction
    for (int i = 0; i < N && !found; i++) {
        string originalTurn = instructions[i].turn;
        int originaldisst = instructions[i].disstance;
        
        // Try each possible turn
        for (const string& newTurn : possibleTurns) {
            if (newTurn == originalTurn) continue;
            
            Position endPos;
            if (tryTurn(instructions, i, newTurn, start, endPos)) {
                if (endPos.x == target.x && endPos.y == target.y) {
                    found = true;
                    wronngTurn = originalTurn;
                    correctTurn = newTurn;
                    wronngdisst = originaldisst;
                    correctdisst = originaldisst;
                    break;
                }
            }
        }
    }
    
    if (found) {
        cout << "Yes\n";
        cout << wronngTurn << " " << wronngdisst << "\n";
        cout << correctTurn << " " << correctdisst;
    } else {
        cout << "No";
    }
    
    return 0;
}