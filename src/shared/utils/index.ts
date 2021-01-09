export function isValidContainer(node: Node): boolean {
  return !!(
    node &&
    (node.nodeType === Node.ELEMENT_NODE ||
      node.nodeType === Node.DOCUMENT_NODE ||
      node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
      (node.nodeType === Node.COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '))
  );
}
