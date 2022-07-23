interface FileType {
  [key: string]: any;
}

// 导入 当前目录下的svg目录下面的 所有 .svg
// @ts-ignore
const files: Record<string, FileType> = import.meta.globEager('./svg/*.svg');
let name = <any>[];
Object.keys(files).forEach((c: string) => {
  c = c.substring(0, c.length - 4).slice(6);
  // 到处svg所有类名
  const ignorelist = ['vue', 'typescript', 'yidu-icon'];
  if (ignorelist.indexOf(c) === -1)
    name.push(c);
});
export default name;

