/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.2(59c417515cc4385a81ab1755611263b94d0071e2)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ko",{"vs/base/browser/ui/actionbar/actionbar":["{0}({1})"],"vs/base/browser/ui/aria/aria":["{0}(다시 발생함)"],"vs/base/browser/ui/findinput/findInput":["입력"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Match Case","Match Whole Word","Use Regular Expression"],"vs/base/browser/ui/inputbox/inputBox":["오류: {0}","경고: {0}","정보: {0}"],"vs/base/common/json":["잘못된 기호","잘못된 숫자 형식","속성 이름 필요","값 필요","콜론이 필요합니다.","쉼표가 필요합니다.","닫는 괄호 필요","닫는 대괄호 필요","파일 끝 필요"],"vs/base/common/keybinding":["Windows","컨트롤","<Shift>","<Alt>","명령","Windows","<Ctrl>","<Shift>","<Alt>","명령","Windows"],"vs/base/common/severity":["오류","경고","정보"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, 선택기","선택기"],"vs/base/parts/quickopen/browser/quickOpenWidget":["빠른 선택기입니다. 결과의 범위를 축소하려면 입력합니다.","빠른 선택기"],"vs/base/parts/tree/browser/treeDefaults":["축소"],"vs/editor/common/config/commonEditorConfig":["편집기","글꼴 패밀리를 제어합니다.","글꼴 두께를 제어합니다.","글꼴 크기(픽셀)를 제어합니다.","줄 높이를 제어합니다. fontSize의 lineHeight를 계산하려면 0을 사용합니다.","줄 번호의 표시 여부를 제어합니다. 가능한 값은 'on', 'off', 'relative'입니다. 'relative'는 현재 커서 위치에서 줄 수를 표시합니다.","세로 눈금자를 표시할 열","단어 관련 탐색 또는 작업을 수행할 때 단어 구분 기호로 사용되는 문자입니다.","탭 한 개에 해당하는 공백 수입니다. `editor.detectIndentation`이 켜져 있는 경우 이 설정은 파일 콘텐츠에 따라 재정의됩니다.","'number'가 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.","<Tab> 키를 누를 때 공백을 삽입합니다. `editor.detectIndentation`이 켜져 있는 경우 이 설정은 파일 콘텐츠에 따라 재정의됩니다.","'boolean'이 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.","파일을 열면 파일 콘텐츠를 기반으로 하여 'editor.tabSize'와 'editor.insertSpaces'가 검색됩니다.","선택 항목의 모서리를 둥글게 할지 여부를 제어합니다.","편집기에서 마지막 줄 이후로 스크롤할지 여부를 제어합니다.","편집기에서 몇 개의 문자 이후에 줄을 바꿀지를 제어합니다. 이 값을 0으로 설정하면 뷰포트 너비 줄 바꿈이 설정됩니다(자동 줄바꿈). -1로 설정하면 편집기에서 줄바꿈을 하지 않습니다.","줄 바꿈 여부를 제어합니다. 줄 바꿈은 min(editor.wrappingColumn, viewportWidthInColumns)에서 수행됩니다.","줄 바꿈 행의 들여쓰기를 제어합니다. 'none', 'same' 또는 'indent' 중 하나일 수 있습니다.","마우스 휠 스크롤 이벤트의 `deltaX` 및 `deltaY`에서 사용할 승수","입력하는 동안 빠른 제안을 표시할지 여부를 제어합니다.","빠른 제안을 표시할 지연 시간(ms)을 제어합니다.","매개 변수 힌트를 사용하도록 설정합니다.","괄호를 연 다음에 편집기에서 괄호를 자동으로 닫을지 여부를 제어합니다.","입력 후 편집기에서 자동으로 줄의 서식을 지정할지 여부를 제어합니다.","Controls if the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.","트리거 문자를 입력할 때 제안을 자동으로 표시할지 여부를 제어합니다.","'Tab' 키 외에도 'Enter' 키를 사용한 제안도 허용할지 제어합니다. 새 줄을 삽입하는 행위와 제안을 허용하는 행위 간의 모호함을 없앨 수 있습니다.","Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (';') can be a commit character that accepts a suggestion and types that character.","코드 조각이 다른 추천과 함께 표시되는지 여부 및 정렬 방법을 제어합니다.","선택 영역 없이 현재 줄 복사 여부를 제어합니다.","단어 기반 추천을 사용합니다.","제안 위젯의 글꼴 크기","제안 위젯의 줄 높이","접두사가 일치하는 경우 코드 조각을 삽입합니다. 'quickSuggestions'를 사용하지 않을 때 가장 잘 작동합니다.","편집기에서 선택 항목과 유사한 일치 항목을 강조 표시할지 여부를 제어합니다.","개요 눈금자에서 동일한 위치에 표시될 수 있는 장식 수를 제어합니다.","커서 애니메이션 스타일을 제어합니다. 가능한 값은 'blink', 'smooth', 'phase', 'expand' 및 'solid'입니다.","마우스 휠을 사용할 때 Ctrl 키를 누르고 있으면 편집기의 글꼴 확대/축소","커서 스타일을 제어합니다. 허용되는 값은 '블록', '줄' 및 '밑줄'입니다.","글꼴 합자 사용","커서가 개요 눈금자에서 가려져야 하는지 여부를 제어합니다.","편집기에서 공백 문자를 렌더링하는 방법을 제어합니다. 가능한 값은 'none', 'boundary' 및 'all'입니다. 'boundary' 옵션은 단어 사이의 한 칸 공백을 렌더링하지 않습니다.","편집기에서 제어 문자를 렌더링할지를 제어합니다.","편집기에서 들여쓰기 가이드를 렌더링할지를 제어합니다.","편집기가 현재 줄 강조 표시를 렌더링하는 방식을 제어합니다. 가능한 값은 'none', 'gutter', 'line' 및 'all'입니다.","편집기에서 코드 필터를 표시하는지 여부를 제어합니다.","편집기에서 코드 접기를 사용할지 여부를 제어합니다.","편집기에서 세로 문자 모양 여백을 렌더링할지 여부를 제어합니다. 문자 모양 여백은 주로 디버깅에 사용됩니다.","탭 정지 뒤에 공백 삽입 및 삭제","끝에 자동 삽입된 공백 제거","해당 콘텐츠를 두 번 클릭하거나 <Esc> 키를 누르더라도 Peek 편집기를 열린 상태로 유지합니다.","diff 편집기에서 diff를 나란히 표시할지 인라인으로 표시할지 여부를 제어합니다.","diff 편집기에서 선행 공백 또는 후행 공백 변경을 diffs로 표시할지 여부를 제어합니다.","diff 편집기에서 추가/제거된 변경 내용에 대해 +/- 표시기를 표시하는지 여부를 제어합니다.","Linux 주 클립보드의 지원 여부를 제어합니다."],"vs/editor/common/config/defaultConfig":["편집기 콘텐츠"],"vs/editor/common/controller/cursor":["명령을 실행하는 동안 예기치 않은 예외가 발생했습니다."],"vs/editor/common/model/textModelWithTokens":["입력을 토큰화하는 동안 모드에서 오류가 발생했습니다."],"vs/editor/common/modes/modesRegistry":["일반 텍스트"],"vs/editor/common/modes/snippetsRegistry":["{0}, {1}"],"vs/editor/common/services/bulkEdit":["이러한 파일이 동시에 변경되었습니다. {0}"],"vs/editor/common/services/modeServiceImpl":["언어 선언을 적용합니다.","언어의 ID입니다.","언어에 대한 이름 별칭입니다.","파일 확장이 언어에 연결되어 있습니다.","파일 이름이 언어에 연결되어 있습니다.","파일 이름 GLOB 패턴이 언어에 연결되어 있습니다.","Mime 형식이 언어에 연결되어 있습니다.","언어 파일의 첫 번째 줄과 일치하는 정규식입니다.","언어에 대한 구성 옵션을 포함하는 파일에 대한 상대 경로입니다."],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Go to Bracket"],"vs/editor/contrib/caretOperations/common/caretOperations":["Move Caret Left","Move Caret Right"],"vs/editor/contrib/caretOperations/common/transpose":["Transpose Letters"],"vs/editor/contrib/clipboard/browser/clipboard":["잘라내기","복사","붙여넣기"],"vs/editor/contrib/comment/common/comment":["줄 주석 설정/해제","줄 주석 추가","줄 주석 제거","블록 주석 설정/해제"],"vs/editor/contrib/contextmenu/browser/contextmenu":["편집기 상황에 맞는 메뉴 표시"],"vs/editor/contrib/find/browser/findWidget":["찾기","찾기","이전 검색 결과","다음 검색 결과","선택 항목에서 찾기","닫기","바꾸기","바꾸기","바꾸기","모두 바꾸기","바꾸기 모드 설정/해제","처음 999개의 결과가 강조 표시되지만 모든 찾기 작업은 전체 텍스트에 대해 수행됩니다.","{0}/{1}","결과 없음"],"vs/editor/contrib/find/common/findController":["찾기","다음 찾기","이전 찾기","다음 선택 찾기","이전 선택 찾기","바꾸기","다음 일치 항목 찾기에 선택 항목 추가","이전 일치 항목 찾기에 선택 항목 추가","다음 일치 항목 찾기로 마지막 선택 항목 이동","마지막 선택 항목을 이전 일치 항목 찾기로 이동","일치 항목 찾기의 모든 항목 선택","모든 항목 변경"],"vs/editor/contrib/folding/browser/folding":["펼치기","재귀적으로 펼치기","접기","재귀적으로 접기","모두 접기","모두 펼치기","Fold Level {0}"],"vs/editor/contrib/format/common/formatActions":["문서 서식","선택 영역 서식"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – 정의 {0}개","정의로 이동","측면에서 정의 열기","정의 피킹(Peeking)","Go to Implementation","Peek Implementation","{0}개 정의를 표시하려면 클릭하세요."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","다음 오류 또는 경고로 이동","이전 오류 또는 경고로 이동"],"vs/editor/contrib/hover/browser/hover":["가리키기 표시"],"vs/editor/contrib/hover/browser/modesContentHover":["로드 중..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["이전 값으로 바꾸기","다음 값으로 바꾸기"],"vs/editor/contrib/inspectTokens/browser/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/contrib/linesOperations/common/linesOperations":["위에 줄 복사","아래에 줄 복사","줄 위로 이동","줄 아래로 이동","줄을 오름차순 정렬","줄을 내림차순으로 정렬","후행 공백 자르기","줄 삭제","줄 들여쓰기","줄 내어쓰기","위에 줄 삽입","아래에 줄 삽입","왼쪽 모두 삭제","Delete All Right","줄 연결","커서 주위 문자 바꾸기","대문자로 변환","소문자로 변환"],"vs/editor/contrib/links/browser/links":["Cmd 키를 누르고 클릭하여 링크로 이동","Ctrl 키를 누르고 클릭하여 링크로 이동","죄송합니다. 이 링크는 형식이 올바르지 않으므로 열지 못했습니다. {0}","죄송합니다. 대상이 없으므로 이 링크를 열지 못했습니다.","링크 열기"],"vs/editor/contrib/multicursor/common/multicursor":["위에 커서 추가","아래에 커서 추가","선택한 줄에서 여러 커서 만들기"],"vs/editor/contrib/parameterHints/browser/parameterHints":["매개 변수 힌트 트리거"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, 힌트"],"vs/editor/contrib/quickFix/browser/quickFix":["수정 사항 표시({0})","수정 사항 표시","빠른 수정"],"vs/editor/contrib/quickOpen/browser/gotoLine":["줄 {0} 및 열 {1}(으)로 이동","줄 {0}(으)로 이동","이동할 1과 {0} 사이의 줄 번호 입력합니다.","이동할 1과 {0} 사이의 열을 입력합니다.","Go to line {0}","줄 번호를 입력하고 선택적 콜론과 이동할 열 번호를 입력합니다.","줄 이동..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","실행할 동작의 이름을 입력합니다.","명령 팔레트"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","탐색할 식별자의 이름을 입력합니다.","기호 이동...","기호({0})","모듈({0})","클래스({0})","인터페이스({0})","메서드({0})","함수({0})","속성({0})","변수({0})","변수({0})","생성자({0})","호출({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – 참조 {0}개","모든 참조 찾기"],"vs/editor/contrib/referenceSearch/browser/referencesController":["로드 중..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["파일을 확인하지 못했습니다.","참조 {0}개","참조 {0}개","미리 보기를 사용할 수 없음","참조","결과 없음","참조"],"vs/editor/contrib/rename/browser/rename":["죄송합니다. 이름 바꾸기를 실행하지 못했습니다.","기호 이름 바꾸기"],"vs/editor/contrib/rename/browser/renameInputField":["입력 이름을 바꾸세요. 새 이름을 입력한 다음 [Enter] 키를 눌러 커밋하세요."],"vs/editor/contrib/rename/common/rename":["결과가 없습니다."],"vs/editor/contrib/smartSelect/common/smartSelect":["선택 확장","선택 축소"],"vs/editor/contrib/suggest/browser/suggestController":["제안 항목 트리거"],"vs/editor/contrib/suggest/browser/suggestWidget":["자세히 알아보기...{0}","{0}, 제안, 세부 정보 있음","{0}, 제안","뒤로 이동","로드 중...","제안 항목이 없습니다.","{0}, 수락됨","{0}, 제안, 세부 정보 있음","{0}, 제안"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Toggle Tab Key Moves Focus"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["닫기"],"vs/platform/configuration/common/configurationRegistry":["Configure settings to be overridden for a set of language identifiers.","Override Settings","구성 설정을 적용합니다.","설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.","구성 속성에 대한 설명입니다.","설정된 경우 'configuration.type'을 '개체'로 설정해야 합니다.","'configuration.title'은 문자열이어야 합니다.","'configuration.properties'는 개체여야 합니다."],"vs/platform/extensions/common/extensionsRegistry":["VS Code 확장의 경우, 확장이 호환되는 VS Code 버전을 지정합니다. *일 수 없습니다. 예를 들어 ^0.10.5는 최소 VS Code 버전인 0.10.5와 호환됨을 나타냅니다.","VS Code 확장의 게시자입니다.","VS Code 갤러리에 사용되는 확장의 표시 이름입니다.","확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.","VS Code 마켓플레이스에 사용되는 배너입니다.","VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.","배너에 사용되는 글꼴의 색상 테마입니다.","이 패키지에 표시된 VS Code 확장의 전체 기여입니다.","마켓플레이스에서 Preview로 플래그 지정할 확장을 설정합니다.","VS Code 확장에 대한 활성화 이벤트입니다.","마켓플레이스 확장 페이지의 사이드바에 표시할 배지의 배열입니다.","배지 이미지 URL입니다.","배지 링크입니다.","배지 설명입니다.","다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).","패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.","128x128 픽셀 아이콘의 경로입니다."],"vs/platform/keybinding/common/abstractKeybindingService":["사용 가능한 다른 명령:","({0})을(를) 눌렀습니다. 둘째 키는 잠시 기다렸다가 누르세요.","키 조합({0}, {1})은 명령이 아닙니다."],"vs/platform/message/common/message":["닫기","나중에","취소"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ko.js.map