const solution = (video_len, pos, op_start, op_end, commands) => {
    const timeToSeconds = (time) => {
        const [mm, ss] = time.split(':').map(Number);
        return mm * 60 + ss;
    };
    
    const formatToTime = (seconds) => {
        const mm = Math.floor(seconds / 60);
        const ss = seconds % 60;
        return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    };
    
    let current = timeToSeconds(pos);
    const end = timeToSeconds(video_len);
    const opStart = timeToSeconds(op_start);
    const opEnd = timeToSeconds(op_end);

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === "next") {
            if (opStart <= current && current <= opEnd) {
            current = opEnd;
            }
            current = Math.min(current + 10, end);
        } else {
            current = Math.max(current - 10, 0);
        }
        if (opStart <= current && current <= opEnd) {
            current = opEnd;
        }
    }

    return formatToTime(current);
};