// Union of closed disjoint intervals
// Write a function interval_insert which takes as input

// a list myl of disjoint closed intervals with integer endpoints, sorted by increasing order of left endpoints
// an interval interval
// and returns the union of interval with the intervals in myl, as an array of disjoint closed intervals.

intervalInsert = function(myl, interval) {
    let [newStart, newEnd] = interval, merged = [], inserted = false;

    myl.forEach(([start, end]) => {
        end < newStart ? merged.push([start, end]) :
        start > newEnd ? (!inserted && merged.push([newStart, newEnd]), inserted = true, merged.push([start, end])) :
        ([newStart, newEnd] = [Math.min(newStart, start), Math.max(newEnd, end)]);
    });

    if (!inserted) merged.push([newStart, newEnd]);

    return merged;
};