#pragma once

#include <stdint.h>
#include <wgleng/util/SceneBuilder.h>

constexpr uint32_t firstmap_stateVersion = 4;
constexpr uint32_t firstmap_stateCount = 55;
constexpr SceneBuilder::State firstmap_states[] = {
   {{41.37,6.039979,40.1},{-0,35.5,0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{29.61,4.9799843,11.85},{180,-6.9999924,-180},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{27.54,16.959948,42.62},{-180,67.12,-180},{5,5,5},6,{0,0.025,0},{0,0,0},{1,1,1},"hintBook",3,0,100,1,{1,0.15,1},1,1,1},
   {{50.55,17.889948,23.88},{45,0,90},{5,5,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"hintBook",3,0,100,1,{0.36,1.04,0.66},1,1,1},
   {{34.51,16.419949,38.99},{90,0,-0},{2,2,2},7,{0,-3.43,0},{0,0,0},{1,1,1},"",1,2,20,10,{1,1,1},1,0.1,2.06},
   {{49.81,20.85995,36.37},{-0,0,-0},{3,3,3},0,{0,-5,0},{0,0,0},{1,1,1},"",1,0,100,1,{0.68,1.59,0.68},1,0.73,2.11},
   {{94.3,19.12995,67.7},{-180,-72.99999,180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{72.08,19.12995,94.1},{180,-26.899998,-180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{38.58,19.12995,100.7},{-180,3.0000052,-180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{9.62,11.149972,62.59},{-90,60.199997,-139.1},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-31.9,7.009978,48.4},{-0,0,-0},{5,5,5},5,{0,-6.64,1.15},{0,0,0},{1,1,1},"",1,0,300,20,{1.55,2.31,1.03},1,1,1},
   {{-15,-2.6499987,111.39},{-90,-5.008956e-06,180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-18.5,-2.6499987,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-22,-2.6499987,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-25.4,-2.6499987,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-23.78,0.17999066,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-20.25,0.17999066,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-16.82,0.17999066,111.39},{-90,-5.008956e-06,180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-18.52,2.869979,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-21.97,2.869979,111.39},{-90,-5.008956e-06,-180},{10,10,10},7,{0,-16.83,0},{0,0,0},{1,1,1},"",1,2,200,100,{1,1,1},1,0.1,2.06},
   {{-150,6.039979,40.1},{-0,0,-0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-110.64,19.16,80.66},{25.6,-10.88,151.68},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,26.03995,40.1},{-0,0,-0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,6.039979,107.2},{-0,0,-0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{-150,6.039979,153.12},{-0,25.92,-0},{20,20,20},8,{0,-9.1,0},{0,0,0},{1,1,1},"",1,0,1000,1,{1.38,0.5,0.84},1,1,1},
   {{38.04,22.139948,57.27},{-0,0,-0},{3,3,3},9,{0,-5.64,0},{0,0,0},{1,1,1},"",1,0,100,1,{1.51,2.03,1.45},1,0.73,2.11},
   {{79.97,18.95995,87.73},{166.40001,-26.399998,-152.53},{2.6,5,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"hintBook",15,0,100,1,{0.36,1.04,0.66},1,1,1},
   {{0,-100,0},{-0,0,-0},{1000,100,1000},8,{0,0,0},{0,0,0},{1,1,1},"",0,0,0,1.98,{1.38,0.954,0.81},1,1,1},
   {{273.68,80.67,273},{-180,-5.008956e-06,180},{300,20,8},3,{-36.07,0,1.71},{0,0,0},{1,1,1},"",0,0,0,0.5,{4.115,6.4,1.44},1,1,1},
   {{-461.56,80.67,90.84},{-180,-33.44,180},{300,20,8},3,{-36.07,0,1.71},{0,0,0},{1,1,1},"",0,0,0,0.5,{4.115,6.4,1.44},1,1,1},
   {{1151.92,80.67,90.84},{-180,-131.56,180},{300,20,8},3,{-36.07,0,1.71},{0,0,0},{1,1,1},"",0,0,0,0.5,{4.115,6.4,1.44},1,1,1},
   {{853.57,96.33,16.18},{-180,-131.56,180},{50,100,400},2,{0,0,-161.2},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.7},1,1,1},
   {{470.29,96.33,6.47},{-180,-45.72,180},{50,100,400},2,{0,0,-184.94},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.64},1,1,1},
   {{48.1,96.33,-401.73},{-180,134.28,180},{50,100,400},2,{0,0,-184.94},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.64},1,1,1},
   {{562.12,96.33,-140.83},{-180,93.6,180},{50,100,400},2,{0,0,-184.94},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.64},1,1,1},
   {{106.73,20.07,106.64},{-180,38.23,180},{50,100,400},2,{0,0,-184.94},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.64},1,1,1},
   {{984.65,190.12,273.82},{-48.59,0,90},{50,253.68,470.06},2,{0,0,-161.2},{0,0,0},{1,1,1},"",0,0,0,0.5,{0.35,1.12,0.7},1,1,1},
   {{648,19,243.98},{-180,270,180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"secretDoor",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{640.09,19,275.62},{-180,297.12,180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{642.35,18,211.21},{-180,246.27,180},{1,1,1},3,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{642.35,63.2,211.21},{-180,246.27,180},{1,1,1},4,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{648,63.09,243.98},{-180,270,180},{1,1,1},3,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{640.09,63.03,275.62},{-180,297.12,180},{1,1,1},3,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{648,128.58,243.98},{-180,90,180},{3.59,1.9,1},3,{0.49,-1.51,1.3},{0,0,0},{4,4,4},"",0,0,0,1,{17.08,23.55,6.65},1,1,1},
   {{48.52,18.95995,99.94},{-178.43001,3.1999927,-153.64},{2.6,5,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"hintBook",15,0,100,1,{0.36,1.04,0.66},1,1,1},
   {{-58.82,4.9799843,185.38},{180,157.92,-180},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{-33.22,4.9799843,178.66},{180,200.48,-180},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{-86.34,4.9799843,165.54},{180,200.48,-180},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{-65.54,4.9799843,121.38},{268.96,200.48,-180},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{-138.82,25.14,121.38},{273.76,186.4,-93.6},{7,7,7},1,{0,-5.47,0},{0,0,0},{1,1,1},"",1,0,500,1,{1,1.34,1},1,1,1},
   {{645.01,16.96,233.48},{-0,0,-0},{2,2,2},0,{0,-3.5,0},{0,0,0},{1,1,1},"codeEnter",6,0,0,1,{0.68,1.59,0.68},1,0.73,2.11},
   {{643.59,17.57,211.87},{0,-65,0},{2.6,4.16,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"",0,0,0,1,{0.36,1.04,0.66},1,1,1},
   {{636.56,17.57,200.62},{-30.15,-65,33.91},{2.6,4.16,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"code1",6,0,0,1,{0.36,1.04,0.66},1,1,1},
   {{641.25,17.57,209.27},{42.64,-59.07,-53.29},{2.6,4.16,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"code2",6,0,0,1,{0.36,1.04,0.66},1,1,1},
   {{646.24,17.57,225.04},{16.1,-71.85,-11.99},{2.6,4.16,5},2,{0,0,-2.24},{0,0,0},{1,1,1},"code3",6,0,0,1,{0.36,1.04,0.66},1,1,1},
};
