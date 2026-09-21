function renderScratchblocks() {
  scratchblocks.renderMatching("pre.blocks", { style: "scratch3" });
  scratchblocks.renderMatching("code.b", { inline: true, style: "scratch3" });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(renderScratchblocks);   // Material for MkDocs
} else {
  window.addEventListener("load", renderScratchblocks);  // plain MkDocs
}