#version 430 core
#define M_PI 3.1415926535897932384626433832795
out vec4 FragColor;

in vec4 gl_FragCoord; // координаты фрагмента

void main() {
    FragColor = vec4(1, 0, 0, 1);
}