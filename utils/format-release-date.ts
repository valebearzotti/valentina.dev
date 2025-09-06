export function formatReleaseDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).replace(
      /(\d+)(,)/,
      (_, day, comma) => {
        const d = parseInt(day, 10);
        const suffix =
          d % 10 === 1 && d % 100 !== 11
            ? "st"
            : d % 10 === 2 && d % 100 !== 12
            ? "nd"
            : d % 10 === 3 && d % 100 !== 13
            ? "rd"
            : "th";
        return `${d}${suffix}${comma}`;
      }
    );
}