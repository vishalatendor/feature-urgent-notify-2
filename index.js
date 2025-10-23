const { TinyColor } = require('@ctrl/tinycolor');

// Sample code demonstrating @ctrl/tinycolor 2.x usage
console.log('🎨 @ctrl/tinycolor 2.x Sample Code\n');

// 1. Basic color creation and manipulation
console.log('1. Basic Color Operations:');
const color1 = new TinyColor('#ff6b6b');
console.log(`Original color: ${color1.toHexString()}`);
console.log(`RGB: ${color1.toRgbString()}`);
console.log(`HSL: ${color1.toHslString()}`);
console.log(`Brightness: ${color1.getBrightness()}`);
console.log(`Luminance: ${color1.getLuminance()}`);

// 2. Color modifications
console.log('\n2. Color Modifications:');
const lightened = color1.lighten(20);
const darkened = color1.darken(20);
const saturated = color1.saturate(30);
const desaturated = color1.desaturate(30);

console.log(`Lightened (20%): ${lightened.toHexString()}`);
console.log(`Darkened (20%): ${darkened.toHexString()}`);
console.log(`Saturated (30%): ${saturated.toHexString()}`);
console.log(`Desaturated (30%): ${desaturated.toHexString()}`);

// 3. Color blending
console.log('\n3. Color Blending:');
const color2 = new TinyColor('#4ecdc4');
const blended = color1.mix(color2, 50);
console.log(`Color 1: ${color1.toHexString()}`);
console.log(`Color 2: ${color2.toHexString()}`);
console.log(`Blended (50%): ${blended.toHexString()}`);

// 4. Color validation and parsing
console.log('\n4. Color Validation and Parsing:');
const colorStrings = [
    '#ff6b6b',
    'rgb(255, 107, 107)',
    'hsl(0, 100%, 70%)',
    'red',
    'invalid-color'
];

colorStrings.forEach(colorStr => {
    const color = new TinyColor(colorStr);
    console.log(`"${colorStr}" -> Valid: ${color.isValid()}, Hex: ${color.toHexString()}`);
});

// 5. Color schemes and palettes
console.log('\n5. Color Schemes:');
const baseColor = new TinyColor('#3498db');
const complementary = baseColor.complement();
const triad = baseColor.triad();
const tetrad = baseColor.tetrad();

console.log(`Base color: ${baseColor.toHexString()}`);
console.log(`Complementary: ${complementary.toHexString()}`);
console.log(`Triad: ${triad.map(c => c.toHexString()).join(', ')}`);
console.log(`Tetrad: ${tetrad.map(c => c.toHexString()).join(', ')}`);

// 6. Color accessibility
console.log('\n6. Color Accessibility:');
const textColor = new TinyColor('#ffffff');
const backgroundColor = new TinyColor('#2c3e50');
const contrastRatio = textColor.getContrastRatio(backgroundColor);

console.log(`Text color: ${textColor.toHexString()}`);
console.log(`Background color: ${backgroundColor.toHexString()}`);
console.log(`Contrast ratio: ${contrastRatio.toFixed(2)}`);
console.log(`WCAG AA compliant: ${contrastRatio >= 4.5 ? 'Yes' : 'No'}`);
console.log(`WCAG AAA compliant: ${contrastRatio >= 7 ? 'Yes' : 'No'}`);

// 7. Random color generation
console.log('\n7. Random Color Generation:');
const randomColor = TinyColor.random();
console.log(`Random color: ${randomColor.toHexString()}`);
console.log(`Random bright color: ${TinyColor.random().setAlpha(0.8).toHexString()}`);

// 8. Additional 2.x specific features
console.log('\n8. Additional 2.x Features:');
const testColor = new TinyColor('#ff6b6b');
console.log(`Is light: ${testColor.isLight()}`);
console.log(`Is dark: ${testColor.isDark()}`);
console.log(`Alpha value: ${testColor.getAlpha()}`);
console.log(`To name: ${testColor.toName()}`);

// 9. Readability and contrast features (2.x enhancements)
console.log('\n9. Readability Features:');
const foreground = new TinyColor('#000000');
const background = new TinyColor('#ffffff');
const readability = foreground.readability(background);
console.log(`Foreground: ${foreground.toHexString()}`);
console.log(`Background: ${background.toHexString()}`);
console.log(`Readability score: ${readability.toFixed(2)}`);

console.log('\n✨ Sample code completed!');
