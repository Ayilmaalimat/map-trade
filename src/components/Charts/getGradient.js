export const getGradient = ()=>{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, '#3281FF');
    gradient.addColorStop(1, '#F49316');
    return gradient
}