const DOC_INFO = new Map<string, string>([
    ["Document", "PDN-F01"],
    ["Revision", "3"],
    ["Date", "2023-06-30"]
]);

const SPC_DOC_INFO = new Map<string, string>([
    ["Document", "PDN-F02"],
    ["Revision", "4"],
    ["Date", "2023-06-30"]
]);

const DOC_INFO_POS = "A1";
const INFO_POS = "A5";
const INSP_POS = "D1";

const DOC_INFO_POS_INSP_SHEET = "A1";
const COMM_POS_INSP_SHEET = "A5";
const INFO_POS_INSP_SHEET = "A12";
const INSP_POS_INSP_SHEET = "D1";

const STD_INSPECTION_INFO = [
    "Customer",
    "Part Name",
    "Part Number",
    "Revision",
    "Inspection Level",
    "Job Number",
    "PO Number",
    "Inspector",
    "Date",
    "Lot Size",
    "Sample Size",
    "Accepted",
    "Rejected"
];

// The first of these should be the most important one as it's part of the header
const STD_DIMENSION_INFO = [
    "Dimension",
    "ID",
    "Gauge ID",
    "Maximum",
    "Nominal",
    "Minimum",
];

// Data from:
// ASQ/ANSI Z1.4-2003 (R2018) Sampling Procedures and Tables for Inspection by Attributes
enum SampleSize {
    A = 2,
    B = 3,
    C = 5,
    D = 8,
    E = 13,
    F = 20,
    G = 32,
    H = 50,
    J = 80,
    K = 125,
    L = 200,
    M = 315,
    N = 500,
    P = 800,
    Q = 1250,
    R = 2000,
};

const INSP_LEVEL_1: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.A],
    [25, SampleSize.B],
    [50, SampleSize.C],
    [90, SampleSize.C],
    [150, SampleSize.D],
    [280, SampleSize.E],
    [500, SampleSize.F],
    [1200, SampleSize.G],
    [3200, SampleSize.H],
    [10000, SampleSize.J],
    [35000, SampleSize.K],
    [150000, SampleSize.L],
    [500000, SampleSize.M],
    [Infinity, SampleSize.N]
];
const INSP_LEVEL_2: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.B],
    [25, SampleSize.C],
    [50, SampleSize.D],
    [90, SampleSize.E],
    [150, SampleSize.F],
    [280, SampleSize.G],
    [500, SampleSize.H],
    [1200, SampleSize.J],
    [3200, SampleSize.K],
    [10000, SampleSize.L],
    [35000, SampleSize.M],
    [150000, SampleSize.N],
    [500000, SampleSize.P],
    [Infinity, SampleSize.Q]
];
const INSP_LEVEL_3: [number, number][] = [
    [8, SampleSize.B],
    [15, SampleSize.C],
    [25, SampleSize.D],
    [50, SampleSize.E],
    [90, SampleSize.F],
    [150, SampleSize.G],
    [280, SampleSize.H],
    [500, SampleSize.J],
    [1200, SampleSize.K],
    [3200, SampleSize.L],
    [10000, SampleSize.M],
    [35000, SampleSize.N],
    [150000, SampleSize.P],
    [500000, SampleSize.Q],
    [Infinity, SampleSize.R]
]
const INSP_LEVEL_S1: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.A],
    [25, SampleSize.A],
    [50, SampleSize.A],
    [90, SampleSize.B],
    [150, SampleSize.B],
    [280, SampleSize.B],
    [500, SampleSize.B],
    [1200, SampleSize.C],
    [3200, SampleSize.C],
    [10000, SampleSize.C],
    [35000, SampleSize.C],
    [150000, SampleSize.D],
    [500000, SampleSize.D],
    [Infinity, SampleSize.D]
];
const INSP_LEVEL_S2: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.A],
    [25, SampleSize.A],
    [50, SampleSize.B],
    [90, SampleSize.B],
    [150, SampleSize.B],
    [280, SampleSize.C],
    [500, SampleSize.C],
    [1200, SampleSize.C],
    [3200, SampleSize.D],
    [10000, SampleSize.D],
    [35000, SampleSize.D],
    [150000, SampleSize.E],
    [500000, SampleSize.E],
    [Infinity, SampleSize.E]
];
const INSP_LEVEL_S3: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.A],
    [25, SampleSize.B],
    [50, SampleSize.B],
    [90, SampleSize.C],
    [150, SampleSize.C],
    [280, SampleSize.D],
    [500, SampleSize.D],
    [1200, SampleSize.E],
    [3200, SampleSize.E],
    [10000, SampleSize.F],
    [35000, SampleSize.F],
    [150000, SampleSize.G],
    [500000, SampleSize.G],
    [Infinity, SampleSize.H]
];
const INSP_LEVEL_S4: [number, number][] = [
    [8, SampleSize.A],
    [15, SampleSize.A],
    [25, SampleSize.B],
    [50, SampleSize.C],
    [90, SampleSize.C],
    [150, SampleSize.D],
    [280, SampleSize.E],
    [500, SampleSize.E],
    [1200, SampleSize.F],
    [3200, SampleSize.G],
    [10000, SampleSize.G],
    [35000, SampleSize.H],
    [150000, SampleSize.J],
    [500000, SampleSize.J],
    [Infinity, SampleSize.K]
];

const INSPECTION_LEVELS = new Map<string, [number, number][]>([
    ["I (General)", INSP_LEVEL_1],
    ["II (General)", INSP_LEVEL_2],
    ["III (General)", INSP_LEVEL_3],
    ["S-1 (Special)", INSP_LEVEL_S1],
    ["S-2 (Special)", INSP_LEVEL_S2],
    ["S-3 (Special)", INSP_LEVEL_S3],
    ["S-4 (Special)", INSP_LEVEL_S4]
]);

const DV_ERROR = {
    title: "",
    message: "Invalid value (choose one from the dropdown).",
    showAlert: true,
    style: ExcelScript.DataValidationAlertStyle.stop,
}

enum Alignment {
    left,
    center,
    right,
    top,
    bottom,
}

class Style {
    hAlign: Alignment;
    vAlign: Alignment;
    autofitCol: boolean;
    autofitRow: boolean;
    fontName: string;
    fontBold: boolean;
    fontColor: string;
    wrapText: boolean;
    fillColor: string;
    borderStyles: ExcelScript.BorderLineStyle[];
    borderWeights: ExcelScript.BorderWeight[];

    constructor(init?: Partial<Style>) {
        Object.assign(this, init);
    }

    // Apply everything that is not undefined in this style to <range>.
    // Border styles/weights are applied as follows: edgeTop, edgeBottom, edgeLeft, edgeRight, insideVertical, insideHorizontal.
    applyTo(fmt: ExcelScript.RangeFormat) {
        if (this.wrapText != undefined) {
            fmt.setWrapText(false);
        }
        let font = fmt.getFont();
        let fill = fmt.getFill();
        let borders = new Array<ExcelScript.RangeBorder>(6);
        borders[0] = fmt.getRangeBorder(ExcelScript.BorderIndex.edgeTop);
        borders[1] = fmt.getRangeBorder(ExcelScript.BorderIndex.edgeBottom);
        borders[2] = fmt.getRangeBorder(ExcelScript.BorderIndex.edgeLeft);
        borders[3] = fmt.getRangeBorder(ExcelScript.BorderIndex.edgeRight);
        borders[4] = fmt.getRangeBorder(ExcelScript.BorderIndex.insideVertical);
        borders[5] = fmt.getRangeBorder(ExcelScript.BorderIndex.insideHorizontal);
        if (this.hAlign != undefined) {
            // I can't assign the alignment directly because Office Scripts won't let me.
            switch (this.hAlign) {
                case Alignment.left:
                    fmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.left);
                    break;
                case Alignment.center:
                    fmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.center);
                    break;
                case Alignment.right:
                    fmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.right);
                    break;
                default:
                    break;
            }
        }
        if (this.vAlign != undefined) {
            switch (this.vAlign) {
                case Alignment.top:
                    fmt.setVerticalAlignment(ExcelScript.VerticalAlignment.top);
                    break;
                case Alignment.center:
                    fmt.setVerticalAlignment(ExcelScript.VerticalAlignment.center);
                    break;
                case Alignment.bottom:
                    fmt.setVerticalAlignment(ExcelScript.VerticalAlignment.bottom);
                    break;
                default:
                    break;
            }
        }
        if (this.fontName != undefined) {
            font.setName(this.fontName);
        }
        if (this.fontBold != undefined) {
            font.setBold(this.fontBold);
        }
        if (this.fontColor != undefined) {
            font.setColor(this.fontColor);
        }
        if (this.fillColor != undefined) {
            fill.setColor(this.fillColor);
        }
        if (this.borderStyles != undefined) {
            let n = Math.min(this.borderStyles.length, borders.length);
            for (let i = 0; i < n; ++i) {
                if (this.borderStyles[i] != undefined) {
                    borders[i].setStyle(this.borderStyles[i]);
                }
            }
        }
        if (this.borderWeights != undefined) {
            let n = Math.min(this.borderWeights.length, borders.length);
            for (let i = 0; i < n; ++i) {
                if (this.borderWeights[i] != undefined) {
                    borders[i].setWeight(this.borderWeights[i]);
                }
            }
        }
        if (this.autofitCol) {
            fmt.autofitColumns();
        }
        if (this.autofitRow) {
            fmt.autofitRows();
        }
        if (this.wrapText != undefined) {
            fmt.setWrapText(this.wrapText);
        }
        return fmt;
    }
}

const DEFAULT_BORDER_STYLES = [
    ExcelScript.BorderLineStyle.continuous,
    ExcelScript.BorderLineStyle.continuous,
    ExcelScript.BorderLineStyle.continuous,
    ExcelScript.BorderLineStyle.continuous,
    ExcelScript.BorderLineStyle.continuous,
    ExcelScript.BorderLineStyle.continuous,
];

const DEFAULT_BORDER_WEIGHTS = [
    ExcelScript.BorderWeight.thick,
    ExcelScript.BorderWeight.thick,
    ExcelScript.BorderWeight.thick,
    ExcelScript.BorderWeight.thick,
    ExcelScript.BorderWeight.thin,
    ExcelScript.BorderWeight.thin,
];

const INFO_STYLE = new Style({
    hAlign: Alignment.center,
    autofitCol: true,
    autofitRow: true,
});

const DARK_BLUE = new Style({
    hAlign: Alignment.center,
    vAlign: Alignment.center,
    autofitCol: true,
    autofitRow: true,
    fontName: "Daytona Condensed",
    fontColor: "FFFFFF",
    fontBold: false,
    fillColor: "305496",
    borderStyles: DEFAULT_BORDER_STYLES,
    borderWeights: DEFAULT_BORDER_WEIGHTS,
});

const MEDIUM_BLUE = new Style({
    hAlign: Alignment.center,
    vAlign: Alignment.center,
    autofitCol: true,
    autofitRow: true,
    fontName: "Daytona Condensed",
    fontColor: "FFFFFF",
    fontBold: true,
    fillColor: "4472C4",
    borderStyles: DEFAULT_BORDER_STYLES,
    borderWeights: DEFAULT_BORDER_WEIGHTS,
});

const LIGHT_BLUE = new Style({
    hAlign: Alignment.center,
    vAlign: Alignment.center,
    autofitCol: true,
    autofitRow: true,
    fontName: "Daytona Condensed",
    fontColor: "000000",
    fontBold: false,
    fillColor: "8EA9DB",
    borderStyles: DEFAULT_BORDER_STYLES,
    borderWeights: DEFAULT_BORDER_WEIGHTS,
});

function columnLabel(i: number): string {
    let label: number[] = [];
    while (i >= 26) {
        label.push(65 + i % 26);
        i = Math.floor(i / 26) - 1;
    }
    label.push(65 + i);
    return String.fromCodePoint.apply(null, label.reverse());
}

function cellLabel(range: ExcelScript.Range): string {
    return columnLabel(range.getColumnIndex()) + (range.getRowIndex() + 1).toString();
}

// Expand the columns in <range> such that the total width of all columns in <range> is at least <minWidth>.
// If the total width is greater than <minWidth> already, this function does nothing.
function expandColumnsTo(range: ExcelScript.Range, minWidth: number) {
    let n = range.getColumnCount();
    let actWidth = 0;
    let colWidths = new Array<number>(n);
    let colFmts = new Array<ExcelScript.RangeFormat>(n);
    for (let i = 0; i < n; ++i) {
        let col = range.getColumn(i);
        let fmt = col.getFormat();
        let width = fmt.getColumnWidth();
        colFmts[i] = fmt;
        colWidths[i] = width;
        actWidth += width;
    }
    let expand = (minWidth - actWidth) / n;
    if (expand <= 0)
        return;
    for (let i = 0; i < n; ++i) {
        colFmts[i].setColumnWidth(colWidths[i] + expand);
    }
}

function expandLeft(range: ExcelScript.Range, n: number): ExcelScript.Range {
    if (n === 0)
        return range;
    let nCols = range.getColumnCount();
    n += nCols;
    if (n === 0)
        return undefined;
    return range.getColumnsAfter(-n);
}

function expandRight(range: ExcelScript.Range, n: number): ExcelScript.Range {
    if (n === 0)
        return range;
    let nCols = range.getColumnCount();
    n += nCols;
    if (n === 0)
        return undefined;
    return range.getColumnsBefore(-n);
}

function expandUp(range: ExcelScript.Range, n: number): ExcelScript.Range {
    if (n === 0)
        return range;
    let nRows = range.getRowCount();
    n += nRows;
    if (n === 0)
        return undefined;
    return range.getRowsBelow(-n);
}

function expandDown(range: ExcelScript.Range, n: number): ExcelScript.Range {
    if (n === 0)
        return range;
    let nRows = range.getRowCount();
    n += nRows;
    if (n === 0)
        return undefined;
    return range.getRowsAbove(-n);
}

function findAll(re: RegExp, s: string): [string, number][] {
    let matches: [string, number][] = [];
    let m: RegExpExecArray;
    while ((m = re.exec(s)) != null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
        m.forEach(match => {
            matches.push([match, m.index]);
        });
    }
    return matches;
}

// Trim and remove extra characters after a number string
const numRe = /-?(?:\d+\.\d*|\.?\d+)/gm;
function sanitizeNumber(num: string): string {
    numRe.lastIndex = 0;
    let m = numRe.exec(num);
    if (m != null) {
        return num.substr(m.index, m[0].length);
    }
    return null;
}

// Return the number of fractional digits a number has.
function numFractional(num: string): number {
    let i = 0;
    for (; i < num.length; ++i) {
        if (num[i] === ".") {
            ++i;
            break;
        }
    }
    return num.length - i;
}

// Starting at the top-left cell of <range>, expand down until an empty cell is encountered (it is not included).
// Then, expand right one column (so that the returned range has 2 columns).
// If the range is undefined or its top left cell is empty, this function returns undefined.
function getVerticalMapRange(range: ExcelScript.Range): ExcelScript.Range {
    if (range == undefined)
        return undefined;
    range = range.getCell(0, 0);
    if (range.getUsedRange(true) == undefined)
        return undefined;
    if (range.getRowsBelow(1).getUsedRange(true) != undefined)
        range = range.getExtendedRange(ExcelScript.KeyboardDirection.down);
    return expandRight(range, 1);
}

// Starting at the top-left cell of <range>, expand down until an empty cell is encountered (it is not included).
// Then, expand right until an empty column is encountered (it is not included).
// If the range is undefined or its top left cell is empty, this function returns undefined.
function getVerticalMultiMapRange(range: ExcelScript.Range): ExcelScript.Range {
    if (range == undefined || range.getCellCount() <= 0)
        return undefined;

    range = range.getCell(0, 0);

    if (range.getUsedRange(true) == undefined)
        return undefined;
    
    if (range.getRowsBelow(1).getUsedRange(true) != undefined)
        range = range.getExtendedRange(ExcelScript.KeyboardDirection.down);
    while (true) {
        let next = expandRight(range, 1);
        if (next.getLastColumn().getUsedRange(true) == undefined)
            break;
        range = next;
    }
    
    return range;
}

function readVerticalMultiMap(range: ExcelScript.Range): Map<string, string>[] {
    range = getVerticalMultiMapRange(range.getCell(0, 0));
    if (range == undefined || range.getColumnCount() == 1)
        return [];

    let keys = range.getColumn(0).getTexts().map(x => x[0]);
    range = expandLeft(range, -1);
    let maps = new Array<Map<string, string>>(range.getColumnCount());
    for (let i = 0; i < maps.length; ++i)
        maps[i] = new Map<string, string>();
    range.getTexts().forEach((x, i) => {
        x.forEach((v, j) => {
            maps[j].set(keys[i], v);
        });
    });

    return maps;
}

function readVerticalMap(range: ExcelScript.Range): Map<string, string> {
    range = getVerticalMapRange(range.getCell(0, 0));
    let map = new Map<string, string>();
    if (range == undefined)
        return map;
    let texts = range.getTexts();
    texts.forEach(kvp => {
        map.set(kvp[0], kvp[1]);
    });
    return map;
}

// If <x> contains a string enclosed by square brackets, return a tuple with:
//     - <x> ending at the first square bracket (excluding the bracket itself)
//     - the string contained within the square brackets
// Otherwise, return undefined.
function getOptions(x: string): [string, string] {
    const optRegex = /\[.*\]/gm;
    let m = optRegex.exec(x);
    if (m == null || m.length == 0)
        return undefined;
    x = x.substring(0, m.index).trim();
    let options = m[0].substr(1, m[0].length - 2);
    return [x, options];
}

// Read the vertical map at <range>. Return said map with values overriden by those in <defaults> (only if the value in <defaults> is not empty).
// If a key in <defaults> has comma separated options in square brackets (see getOptions), set the data validation in the corresponding value cell to only accept those options and remove the options from the key.
function unionMaps(range: ExcelScript.Range, defaults: Map<string, string>): Map<string, string> {
    let existing = readVerticalMap(range) ?? new Map<string, string>();
    let map = new Map<string, string>();

    defaults.forEach((v, k) => {
        let options = getOptions(k);
        if (options != undefined) {
            let dv = range.getCell(map.size, 1).getDataValidation();
            dv.clear();
            dv.setRule({
                list: {inCellDropDown: true, source: options[1]}
            });
            dv.setErrorAlert(DV_ERROR);
            k = options[0];
        }
        if (v.length !== 0)
            map.set(k, v);
        else
            map.set(k, existing.get(k) ?? "");
        existing.delete(k);
    });
    existing.forEach((v, k) => {
        map.set(k, v);
    });

    return map;
}

function writeVerticalMap(range: ExcelScript.Range, map: Map<string, string>, keysStyle: Style, valuesStyle: Style): ExcelScript.Range {
    range = expandRight(expandDown(range.getCell(0, 0), map.size - 1), 1);
    range.setNumberFormat("@");
    let entries = Array.from(map.entries());
    for (let i = 0; i < entries.length; ++i) {
        let options = getOptions(entries[i][0]);
        if (options == undefined)
            continue;
        entries[i][0] = options[0];
        let dv = range.getColumn(1).getCell(i, 0).getDataValidation();
        dv.clear();
        dv.setRule({
            list: { inCellDropDown: true, source: options[1] }
        });
        dv.setErrorAlert(DV_ERROR);
    }
    range.setValues(entries);

    let keysFmt = range.getColumn(0).getFormat();
    let valuesFmt = range.getColumn(1).getFormat();

    keysFmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.center);
    valuesFmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.center);

    if (keysStyle != undefined)
        keysStyle.applyTo(keysFmt);
    if (valuesStyle != undefined)
        valuesStyle.applyTo(valuesFmt);
    
    keysFmt.autofitColumns();
    valuesFmt.autofitColumns();

    return range;
}

function writeMergedVerticalMap(keyRange: ExcelScript.Range, valRange: ExcelScript.Range, map: Map<string, string>, keyStyle: Style, valStyle: Style) {
    keyRange = expandDown(keyRange, map.size - keyRange.getRowCount());
    valRange = expandDown(valRange, map.size - valRange.getRowCount());

    keyRange.merge(true);
    valRange.merge(true);

    let keyFmt = keyRange.getFormat();
    let valFmt = valRange.getFormat();

    if (keyStyle != undefined)
        keyStyle.applyTo(keyFmt);
    if (valStyle != undefined)
        valStyle.applyTo(valFmt);
    
    keyRange.getColumnsBefore(-1).setValues(Array.from(map.keys()).map(x => [x]));
    valRange.getColumnsBefore(-1).setValues(Array.from(map.values()).map(x => [x]));
}

function writeEmptyVerticalMap(range: ExcelScript.Range, keys: string[], keysStyle: Style, valuesStyle: Style) {
    range = expandRight(expandDown(range.getCell(0, 0), keys.length - 1), 1);
    range.setNumberFormat("@");
    range.setValues(keys.map(x => [x, null]));

    if (keysStyle != undefined)
        keysStyle.applyTo(range.getColumn(0).getFormat());
    if (valuesStyle != undefined)
        valuesStyle.applyTo(range.getColumn(1).getFormat());

    return range;
}

function createCommentsBox(range: ExcelScript.Range) {
    let topRow = range.getRow(0);
    topRow.merge();
    topRow.setValue("Comments");
    MEDIUM_BLUE.applyTo(topRow.getFormat());

    let box = expandUp(range, -1);
    let boxFmt = box.getFormat();
    box.merge();
    LIGHT_BLUE.applyTo(box.getFormat());
    boxFmt.setWrapText(true);
    boxFmt.setHorizontalAlignment(ExcelScript.HorizontalAlignment.left);
    boxFmt.setVerticalAlignment(ExcelScript.VerticalAlignment.top);
}

// Basically range from Python.
function range(start: number, stop: number, step: number): number[] {
    let nums: number[] = [];
    if (start > stop) {
        if (step >= 0)
            return undefined;
        for (let i = start - 1; i >= stop; i += step)
            nums.push(i);
    }
    else {
        if (step <= 0)
            return undefined;
        for (let i = start; i < stop; i += step)
            nums.push(i);
    }
    return nums;
}

function createPartInfo(workbook: ExcelScript.Workbook): ExcelScript.Worksheet {
    let partInfo = workbook.addWorksheet("Part Info");

    writeVerticalMap(partInfo.getRange(DOC_INFO_POS), DOC_INFO, INFO_STYLE, INFO_STYLE);
    let generalInfoValueRange = writeEmptyVerticalMap(partInfo.getRange(INFO_POS), STD_INSPECTION_INFO, INFO_STYLE, INFO_STYLE).getColumn(1);
    
    let inspLevelIdx = STD_INSPECTION_INFO.findIndex(v => v === "Inspection Level");
    if (inspLevelIdx > -1) {
        let dv = generalInfoValueRange.getCell(inspLevelIdx, 0).getDataValidation();
        dv.clear();
        let vals = "";
        INSPECTION_LEVELS.forEach((v, k) => vals = vals.concat(",", k));
        dv.setRule({
            list: {inCellDropDown: true, source: vals},
        });
        dv.setErrorAlert(DV_ERROR);
    }

    let final = partInfo.getRange(INSP_POS);
    final.setValue("Final Inspection");
    writeEmptyVerticalMap(final.getRowsBelow(1), STD_DIMENSION_INFO, INFO_STYLE, INFO_STYLE);

    return partInfo;
}

// Return the union of all keys in <maps> as a string array.
function unionKeys(maps: Map<string, string>[]): string[] {
    let keySet = new Set<string>();
    maps.forEach(m => {
        m.forEach((v, k) => {
            keySet.add(k);
        })
    });
    return Array.from(keySet.values());
}

// Write the union of all the keys present in <dimensions> to the leftmost column of <range> (<range> will be expanded as needed starting from the top-left cell).
// Write all values associated with the keys to subsequent columns, where each column corresponds to a map in <dimensions>. If a key does not have a value for a certain map, the cell is left blank.
// Returns the column containing the unioned keys, or undefined if there are no keys (either <dimensions> is empty or contains only empty maps). If undefined is returned, <range>'s worksheet is not modified.
// If old inspection data is present (identified by a '1' in the keys column), it is moved down to make room for the dimensions.
function updateDimensions(range: ExcelScript.Range, dimensions: Map<string, string>[]): ExcelScript.Range {
    let dimKeys = unionKeys(dimensions);
    if (dimKeys.length == 0)
        return undefined;

    let dimKeyRange = range.getCell(0, 0);
    if (dimKeys.length > 1)
        dimKeyRange = dimKeyRange.getRowsAbove(-dimKeys.length);

    let oldKeys = dimKeyRange.getTexts().map(x => x[0]);
    for (let i = 0; i < oldKeys.length; ++i) {
        if (oldKeys[i] == "1") {
            // we have encountered old inspection data - move it down to make room for dimensions
            let row = dimKeyRange.getRowIndex();
            let col = dimKeyRange.getColumnIndex();

            let oldDataRange = dimKeyRange.getCell(i, 0);
            oldDataRange = getVerticalMultiMapRange(oldDataRange);
            if (oldDataRange != undefined)
                oldDataRange.moveTo(oldDataRange.getOffsetRange(dimKeys.length - i, 0));

            // why the fuck does moving another range resize keyRange
            dimKeyRange = range.getWorksheet().getRangeByIndexes(row, col, dimKeys.length, 1);
        }
    }

    dimKeyRange.setValues(dimKeys.map(x => [x]));
    MEDIUM_BLUE.applyTo(dimKeyRange.getFormat());

    if (dimensions.length > 0) {
        let dimRange = dimKeyRange.getColumnsAfter(dimensions.length);
        dimRange.setNumberFormat("@");
        dimRange.setValues(dimKeys.map(k => dimensions.map(d => d.get(k) ?? "")));

        DARK_BLUE.applyTo(dimRange.getFormat());
        MEDIUM_BLUE.applyTo(dimRange.getRow(0).getFormat());
    }

    return dimKeyRange;
}

function setConditionalFormatting(sampleDataRange: ExcelScript.Range, dimensions: Map<string, string>[]) {
    for (let i = 0; i < dimensions.length; ++i) {
        let col = sampleDataRange.getColumn(i);
        let colFmt = col.getFormat();

        let min = sanitizeNumber(dimensions[i].get("Minimum") ?? "");
        let nom = sanitizeNumber(dimensions[i].get("Nominal") ?? "");
        let max = sanitizeNumber(dimensions[i].get("Maximum") ?? "");

        let prec = -1;
        if (min != undefined) {
            prec = Math.max(prec, numFractional(min));
        }
        if (nom != undefined) {
            prec = Math.max(prec, numFractional(nom));
        }
        if (max != undefined) {
            prec = Math.max(prec, numFractional(max));
        }
        if (prec < 0) {
            col.setNumberFormat("@");
            continue;
        }
        let numFmt = "0";
        if (prec > 0)
            numFmt = numFmt.concat(".", "0".repeat(prec));
        col.setNumberFormat(numFmt);

        let label = cellLabel(col);
        if (min == undefined && max != undefined) {
            let cond = col.addConditionalFormat(ExcelScript.ConditionalFormatType.custom).getCustom();
            cond.getRule().setFormula(`=ROUND(${label},${prec})<=${max}`);
            cond.getFormat().getFill().setColor("80FF80");
            colFmt.getFill().setColor("FF8080");
        }
        else if (min != undefined && max == undefined) {
            let cond = col.addConditionalFormat(ExcelScript.ConditionalFormatType.custom).getCustom();
            cond.getRule().setFormula(`=${min}<=ROUND(${label},${prec})`);
            cond.getFormat().getFill().setColor("80FF80");
            colFmt.getFill().setColor("FF8080");
        }
        else if (min != undefined && max != undefined) {
            let cond = col.addConditionalFormat(ExcelScript.ConditionalFormatType.custom).getCustom();
            cond.getRule().setFormula(`=AND(${min}<=ROUND(${label},${prec}),ROUND(${label},${prec})<=${max})`);
            cond.getFormat().getFill().setColor("80FF80");
            colFmt.getFill().setColor("FF8080");
        }
    }
}

function setYesNoCondFmt(range: ExcelScript.Range) {
    range.setNumberFormat("@");
    let dv = range.getDataValidation();
    dv.clear();
    dv.setRule({
        list: { inCellDropDown: true, source: "✔,✘" }
    });
    dv.setErrorAlert(DV_ERROR);
    let cond = range.addConditionalFormat(ExcelScript.ConditionalFormatType.cellValue).getCellValue();
    cond.setRule({
        formula1: "\"✔\"",
        operator: ExcelScript.ConditionalCellValueOperator.equalTo
    });
    cond.getFormat().getFill().setColor("80FF80");
    range.getFormat().getFill().setColor("FF8080");
}

function getSampleSize(lotSize: number, inspLevel: string) {
    let inspSampleSizes = INSPECTION_LEVELS.get(inspLevel);
    if (inspSampleSizes == undefined)
        return NaN;

    let left = 0;
    let right = inspSampleSizes.length;

    while (left < right) {
        let center = (left + right) >> 1;
        if (lotSize <= inspSampleSizes[center][0])
            right = center;
        else
            left = center + 1;
    }

    if (left < 0 || left >= inspSampleSizes.length)
        return NaN;
    return inspSampleSizes[left][1];
}

function updateInspection(header: ExcelScript.Range, inspName: string, sampleSize: number, dimensions: Map<string, string>[], defIndex: number, columnDefs: Map<string, string>): ExcelScript.Range {
    header = header.getCell(0, 0);
    header.setValue(inspName);
    MEDIUM_BLUE.applyTo(header.getFormat());
    let minHeaderWidth = header.getFormat().getColumnWidth();
    header.clear();

    let dimKeyRange = updateDimensions(header.getCell(1, 0), dimensions);
    if (dimKeyRange == undefined)
        dimKeyRange = header.getCell(1, 0);
    let dimsIdx = dimKeyRange.getColumnIndex() + 1; // index of the leftmost column of dimension data
    
    if (!isNaN(sampleSize) && sampleSize > 0) {
        let sampleNumRange = dimKeyRange.getRowsBelow(sampleSize);
        sampleNumRange.setValues(range(0, sampleSize, 1).map(x => [x + 1]));
        let passFailRange: ExcelScript.Range = undefined;

        if (dimensions.length > 0) {
            let sampleDataRange = sampleNumRange.getColumnsAfter(dimensions.length);
            sampleDataRange.getDataValidation().clear();
            passFailRange = sampleDataRange.getColumnsAfter(1);
            let sampleDataFormat = sampleDataRange.getFormat();
            sampleDataFormat.setHorizontalAlignment(ExcelScript.HorizontalAlignment.left);
            LIGHT_BLUE.applyTo(sampleDataFormat);
            setConditionalFormatting(sampleDataRange, dimensions);

            let dataRow = (sampleDataRange.getRowIndex() + 1).toString();
            for (let i = 0; i < dimensions.length; ++i) {
                columnDefs.set(columnLabel(defIndex + i), columnLabel(dimsIdx + i) + dataRow);
            }
        }
        else {
            passFailRange = sampleNumRange.getColumnsAfter(1);
            passFailRange.setFormula("");
            dimKeyRange.setValue("#");
            MEDIUM_BLUE.applyTo(dimKeyRange.getFormat());
        }

        let passFailDv = passFailRange.getDataValidation();
        passFailDv.clear();
        passFailDv.setRule({
            list: { inCellDropDown: true, source: "PASS,FAIL" }
        });
        passFailDv.setErrorAlert(DV_ERROR);

        let passFailCond = passFailRange.addConditionalFormat(ExcelScript.ConditionalFormatType.cellValue).getCellValue();
        passFailCond.setRule({
            formula1: "\"PASS\"",
            operator: ExcelScript.ConditionalCellValueOperator.equalTo
        });
        passFailCond.getFormat().getFill().setColor("80FF80");

        let passFailHeader = passFailRange.getRowsAbove(1);
        passFailHeader.setValue("PASS/FAIL");

        LIGHT_BLUE.applyTo(sampleNumRange.getFormat());
        MEDIUM_BLUE.applyTo(passFailHeader.getFormat());
        LIGHT_BLUE.applyTo(passFailRange.getFormat());
        passFailRange.getFormat().getFill().setColor("FF8080");
    }

    header = expandRight(header, dimensions.length + 1);
    header.merge();
    header.setValue(inspName);
    MEDIUM_BLUE.applyTo(header.getFormat());
    expandColumnsTo(header, minHeaderWidth);
    return header.getCell(0, dimensions.length + 3);
}

function update(partInfoSheet: ExcelScript.Worksheet, inspSheet: ExcelScript.Worksheet, workbook: ExcelScript.Workbook) {
    writeVerticalMap(inspSheet.getRange(DOC_INFO_POS_INSP_SHEET), DOC_INFO, MEDIUM_BLUE, LIGHT_BLUE);

    let inspInfoPos = inspSheet.getRange(INFO_POS_INSP_SHEET);
    let partInfo = unionMaps(inspInfoPos, readVerticalMap(partInfoSheet.getRange(INFO_POS)));

    let lotSize = Number.parseInt(partInfo.get("Lot Size"));
    let sampleSize: number = NaN;
    if (!isNaN(lotSize)) {
        sampleSize = getSampleSize(lotSize, partInfo.get("Inspection Level") ?? "");
        if (!isNaN(sampleSize) && lotSize < sampleSize)
            sampleSize = lotSize;
    }
    if (isNaN(sampleSize)) {
        sampleSize = Number.parseInt(partInfo.get("Sample Size"));
    }
    else {
        partInfo.set("Sample Size", sampleSize.toString());
    }

    let columnDefs = new Map<string, string>();
    let formulae: [string, string][] = []; // [dest. column, formula]

    let inspDefHeader = partInfoSheet.getRange(INSP_POS);
    let inspHeader = inspSheet.getRange(INSP_POS_INSP_SHEET);
    while (true) {
        let inspName = inspDefHeader.getText();
        if (inspName.length == 0)
            break;
        else {
            let dimDefIdx = inspDefHeader.getColumnIndex() + 1;
            let dimensions = readVerticalMultiMap(inspDefHeader.getRowsBelow(1));

            for (let i = 0; i < dimensions.length; ++i) {
                let option = getOptions(dimensions[i].get("Gauge ID"));
                if (option == null)
                    continue;
                dimensions[i].set("Gauge ID", option[0]);
                let formula = option[1].trim();
                formulae.push([columnLabel(dimDefIdx + i), formula]);
            }

            inspDefHeader = inspDefHeader.getOffsetRange(0, dimensions.length + 2);
            inspHeader = updateInspection(inspHeader, inspName, sampleSize, dimensions, dimDefIdx, columnDefs);
        }
    }

    const colRe = /![A-Z]+/gm;
    if (!isNaN(sampleSize) && sampleSize >= 1) {
        for (let i = 0; i < formulae.length; ++i) {
            let dest = columnDefs.get(formulae[i][0]);
            if (dest == null)
                continue;
            let formula = formulae[i][1];
            let destRangeTop = inspSheet.getRange(dest);
            let destRange = expandDown(destRangeTop, sampleSize - 1);
            if (formula.toLowerCase() === "bool") {
                setYesNoCondFmt(destRange);
            }
            else {
                if (!formula.startsWith("="))
                    formula = "=" + formula;
                formula = formula.replace(colRe, (match) => {
                    return columnDefs.get(match.substring(1)) ?? "";
                });
                if (destRange.getNumberFormat() === "@")
                    destRange.setNumberFormat("General");
                destRangeTop.setFormula(formula);
                destRangeTop.autoFill(destRange, ExcelScript.AutoFillType.fillValues);
            }
        }
    }

    writeVerticalMap(inspSheet.getRange(INFO_POS_INSP_SHEET), partInfo, MEDIUM_BLUE, LIGHT_BLUE);
    createCommentsBox(expandDown(expandRight(inspSheet.getRange(COMM_POS_INSP_SHEET), 1), 5));
}

function main(workbook: ExcelScript.Workbook) {
    let partInfo = workbook.getWorksheet("Part Info");
    if (partInfo == undefined) {
        partInfo = createPartInfo(workbook);
        partInfo.activate();
        return;
    }

    let inspSheet = workbook.getWorksheet("Inspection") ?? workbook.addWorksheet("Inspection");
    let inspRange = inspSheet.getRange();
    inspRange.clear(ExcelScript.ClearApplyTo.formats);
    inspRange.getDataValidation().clear();
    inspSheet.activate();
    
    update(partInfo, inspSheet, workbook);
}