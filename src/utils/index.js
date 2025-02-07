export const getRandomBG = () => {
    const colors = [
        '#FF5733', // Vibrant Red
        '#FFBD33', // Yellow-Orange
        '#33FF57', // Vibrant Green
        '#33A1FF', // Sky Blue
        '#8E44AD', // Purple
        '#F39C12', // Bright Yellow
        '#E74C3C', // Bright Red
        '#1ABC9C', // Teal
        '#9B59B6', // Lavender
        '#3498DB', // Blue
        '#F1C40F', // Golden Yellow
        '#2ECC71', // Emerald Green
        '#E67E22', // Orange
        '#16A085', // Dark Cyan
        '#D35400', // Deep Orange
        '#2980B9', // Strong Blue
        '#8E44AD', // Bold Purple
        '#C0392B', // Red
        '#7F8C8D', // Cool Gray
        '#2C3E50', // Dark Blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const getAvatarName = (name) => {
    if(!name) return "";

    return name.split(" ").map(word => word[0]).join("").toUpperCase();
}