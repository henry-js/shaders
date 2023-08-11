#version 300 es
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

out vec4 fragColor;

float circleshape(vec2 position, float radius) {
    return step(radius, length(position - vec2(0.5)));
}
void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;

    float circle = circleshape(position, 0.2);

    vec3 color = vec3(circle);

    fragColor = vec4(color, 1.0);
}
