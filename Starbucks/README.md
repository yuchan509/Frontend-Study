# STARBUCKS

## ��Ÿ���� ������ ����� ���� ������ ����.

## ���� �׷���(The Open Graph protocol)
: �������� ��� ������ SNS�� �ԽõǴµ� ����ȭ�� �����͸� ������ �� �� �ֵ��� �����ϴ� ��.

`�̹����� ��� �ּ��� 600 x 315 �ȼ��� �Ǿ�� �ϸ�, 1200 x 630 �ȼ� ũ�⸦ ����`

Naver ��α�, īī���� �̸����� ����

```html
<meta property="og:title" content="������ ����" /> 
<meta property="og:url" content="�������� URL" />
<meta property="og:type" content="�������� Ÿ��(blog, website ��)" />
<meta property="og:image" content="ǥ�õǴ� �̹���" /> 
<meta property="og:title" content="������Ʈ �̸�" /> 
<meta property="og:description" content="�������� ����" /> 

<!-- ������ �±״� �ʼ��� �ƴϳ�, �����ϴ� ���� ��õ�� -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
- `og:title`: ���������� �̸�(����)
- `og:url`: �������� �ּ�(URL)
- `og:image`: ���������� ��ǥ �̹��� �ּ�(URL)
- `og:type`: ���������� Ÿ��(E.g, `website`, `video.movie`)
- `og:site_name`: ������Ʈ�� �̸�
- `og:description`: �������� ������ ����


Twitter �̸����� ����

```html
<meta name="twitter:title" content="������ ����" /> 
<meta property="twitter:url" content="�������� URL" />
<meta name="twitter:card" content="Ʈ���� ī�� Ÿ��(�������, ����, ����)" /> 
<meta name="twitter:image" content="ǥ�õǴ� �̹��� " /> 
<meta property="twitter:site" content="������Ʈ �̸�" />
<meta name="twitter:description" content="�������� ����" /> 
```

- `twitter:title`: �������� �̸�(����)
- `twitter:url`: �������� �ּ�(URL)
- `twitter:card`: ������(ī��)�� ����(E.g. `summary`, `player`)
- `twitter:image`: �������� ��ǥ �̹��� �ּ�(URL)
- `twitter:site`: ���� ����Ʈ�� �̸�
- `twitter:description`: �������� ������ ����



## Lodash _.throttle()

[Lodash](https://lodash.com/) : `�پ��� ��ƿ��Ƽ ����� �����ϴ� js ���̺귯��.`


[Lodash _.throttle](https://cdnjs.com/libraries/lodash.js) : 
`�� ms���� �ִ� �� ���� ȣ��� �� �ֵ��� Throttle�� �Լ��� ����.`

Lodash _.throttle�� ����� ���� ���� ��ʴ� Infinite scroll ������ ����. Infinite scroll������ �밳 AJAX ��û�� ������, onscroll�� AJAX ��û�� ���ε��س����� ��ũ�� �̺�Ʈ�� ���� �߻��ϹǷ� ������ ��û�� ������ ��. ���� Ŭ���̾�Ʈ�� ������ �δ��� ���̱� ���� ������ ���� ��û�� �������� ������ �ʿ䰡 ����. _.throttle�� �̷��� ������ �ذ��ϱ⿡ ���� �����̴�.