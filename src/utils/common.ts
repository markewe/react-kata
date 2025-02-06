export const translateDuration = (seconds: number) => {
    return `~${Math.ceil(seconds / 60)} minutes`
}