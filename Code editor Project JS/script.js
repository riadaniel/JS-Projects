
    const htmlCode = document.getElementById("htmlCode");
    const cssCode = document.getElementById("cssCode");
    const jsCode = document.getElementById("jsCode");
    const output = document.getElementById("output");

    function runCode() {
      const html = htmlCode.value;
      const css = `<style>${cssCode.value}</style>`;
      const js = `<script>${jsCode.value}<\/script>`;
      output.srcdoc = html + css + js;
    }

    // Update live whenever user types
    [htmlCode, cssCode, jsCode].forEach(editor => {
      editor.addEventListener("input", runCode);
    });
  