#pragma once

#include <stdint.h>
#include "../util/SceneBuilder.h"

constexpr uint32_t world1_stateVersion = 4;
constexpr uint32_t world1_stateCount = 30;
constexpr SceneBuilder::State world1_states[] = {
   {{0,-20,0},{0,0,0},{10,1,10},-1,{0,0,0},{0,0,0},{1,1,1},"",0,0,0,1,{200,20,200},1,1,1},
   {{41.37,10.53,40.1},{0,35.5,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{29.61,9.47,11.85},{0,187,0},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",0,0,500,1,{1,1.34,1},1,1,1},
   {{27.54,21.45,42.62},{0,112.88,0},{5,5,5},6,{0,0.025,0},{0,0,0},{1,1,1},"",0,0,100,1,{1,0.15,1},1,1,1},
   {{50.55,22.38,23.88},{45,0,90},{5,5,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"",0,0,100,1,{0.36,1.04,0.66},1,1,1},
   {{34.51,20.91,38.99},{90,0,0},{2,2,2},7,{0,-3.43,0},{0,0,0},{1,1,1},"",0,2,20,10,{1,1,1},1,0.1,2.06},
   {{49.81,25.35,36.37},{0,0,0},{3,3,3},0,{0,-5,0},{0,0,0},{1,1,1},"",0,0,100,1,{0.68,1.59,0.68},1,0.73,2.11},
   {{94.3,23.62,67.7},{0,253,0},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{72.08,23.62,94.1},{0,206.9,0},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{38.58,23.62,100.7},{0,177,0},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{9.62,15.64,62.59},{90,119.8,40.9},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{0,-12.8,0},{90,0,0},{100,100,8},3,{0,0,0},{0,0,0},{1,1,1},"",0,-1,0,0.5,{1,1,1},1,1,1},
   {{0,34.7,273},{0,180,0},{100,20,8},3,{0,0,0},{0,0,0},{1,1,1},"",0,-1,0,0.5,{1,1,1},1,1,1},
   {{0,34.7,-300},{0,0,0},{100,20,10},3,{0,0,0},{0,0,0},{1,1,1},"",0,-1,0,0.5,{1,1,1},1,1,1},
   {{-31.9,11.5,48.4},{0,0,0},{5,5,5},5,{0,-6.64,1.15},{0,0,0},{1,1,1},"",0,0,300,20,{1.55,2.31,1.03},1,1,1},
   {{-15,1.84,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-18.5,1.84,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-22,1.84,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-25.4,1.84,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-23.78,4.67,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-20.25,4.67,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-16.82,4.67,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-18.52,7.36,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-21.97,7.36,111.39},{90,180,0},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",0,2,200,100,{1,1,1},1,0.1,2.06},
   {{-150,10.53,40.1},{0,0,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,10.53,74.9},{0,0,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,30.53,40.1},{0,0,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,10.53,107.2},{0,0,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,10.53,140},{0,0,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",0,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{38.04,26.63,57.27},{0,0,0},{3,3,3},9,{0,-5.64,0},{0,0,0},{1,1,1},"",0,0,100,1,{1.51,2.03,1.45},1,0.73,2.11},
};
