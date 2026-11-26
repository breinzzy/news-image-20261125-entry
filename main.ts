// World in One Image — Wednesday 25 November 2026 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (37 dated stories, 10 regions, 16 fields; rendered deterministically
// from page-25nov.html, md5 2178dbf69d29460ed33ac202973d34e6);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
