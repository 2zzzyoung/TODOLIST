import React from "react";

// export const year = new Date().getFullYear();
export const month = new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
export const date = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
export const todayWeak = new Date().getDay();

export const monthFilter =
    month === "01"
        ? "jan"
        : month === "02"
        ? "feb"
        : month === "03"
        ? "mar"
        : month === "04"
        ? "apr"
        : month === "05"
        ? "may"
        : month === "06"
        ? "jun"
        : month === "07"
        ? "jul"
        : month === "08"
        ? "aug"
        : month === "09"
        ? "sep"
        : month === "10"
        ? "oct"
        : month === "11"
        ? "nov"
        : "dec";

export const week =
    todayWeak === 0
        ? "Sunday"
        : todayWeak === 1
        ? "Monday"
        : todayWeak === 2
        ? "Tuesday"
        : todayWeak === 3
        ? "wednesday"
        : todayWeak === 4
        ? "Thursday"
        : todayWeak === 5
        ? "Friday"
        : "Saturday";
