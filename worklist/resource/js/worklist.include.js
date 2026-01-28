/**
 * worklist.include
 * --------------------------------------
 * @version 2.0.0
 * @author Goang
 */

/**
 * include
 * --------------------------------------
 */

function inc_linkInfo() {
	var linkPath = '../worklist/';
	var str = '';
	str += '<h2>Links</h2>';
	str += '<table class="table-info table-link" summary="검색 필터">';
	str += '<caption>Link info</caption>';
	str += '<colgroup>';
	str += '	<col width="110px" />';
	str += '	<col width="auto" />';
	str += '</colgroup>';
	str += '<tbody>';
	str += '	<tr>';
	str += '		<th scope="row">Worklist</th>';
	str += '		<td class="tobe_section">';
	str += '			<div class="group">';
	str += '				<a href="' + linkPath + 'worklist.html" class="btn"><span>Front</span></a>';
	str += '				<a href="' + linkPath + 'worklist.desktop.html" class="btn"><span>Front</span></a>';
	str += '				<a href="' + linkPath + 'worklist.guide.html" class="btn"><span>Guide</span></a>';
	// str+='				<a href="'+linkPath+'admin/m/html/_pub_guide/worklist.guide.html" class="btn"><span>A.Guide</span></a>';
	str += '			</div>';
	str += '		</td>';
	str += '	</tr>';
	str += '	<tr>';
	str += '		<th scope="row">Util</th>';
	str += '		<td class="etc_section">';
	str += '			<div class="group">';
	str += '				<a href="worklist.addon/data-converter/index.html" class="btn" target="_blank"><span>Data Convert</span></a>';
	str += '				<a href="worklist.addon/url-encoder-SVG/index.html" class="btn" target="_blank"><span>Svg Convert</span></a>';
	str += '			</div>';
	str += '		</td>';
	str += '	</tr>';
	// str+='	<tr>';
	// str+='		<th scope="row">Ref</th>';
	// str+='		<td class="etc_section">';
	// str+='			<div>';
	// str+='				<a href="https://zentangle.com/" class="btn" target="_blank"><span>Zentangle</span></a>';
	// str+='			</div>';
	// str+='		</td>';
	// str+='	</tr>';
	str += '</tbody>';
	str += '</table>';
	document.write(str);
}

function inc_filter() {
	var str = '';
	str += '		<h2>Filters</h2>';
	str += '		<table class="table-info table-filter" summary="검색 필터">';
	str += '		<caption>문서 정보</caption>';
	str += '		<colgroup><col width="110px" /><col width="auto" /></colgroup>';
	str += '		<tbody>';

	// str += '			<tr>';
	// str += '				<th rowspan="2"><span class="total_rate">&nbsp;<span></th>';
	// str += '				<td class="filterOption">';
	// str += '					<p><strong>* Delete :</strong>';
	// str += '						<label><input type="radio" name="ch_del" id=del01 value="true"  /> 포함</label>';
	// str += '						<label><input type="radio" name="ch_del" id="del02" value="false" checked/> 제외</label>';
	// str += '					</p>';
	// str += '					<p class="ml10"><strong>* Group :</strong>';
	// str += '						<label><input type="radio" name="ch_group" id="gropu01" value="true" checked /> Yes</label>';
	// str += '						<label><input type="radio" name="ch_group" id=gropu02 value="false"  /> No</label>';
	// str += '					</p>';
	// str += '				</td>';
	// str += '			</tr>';

	str += '			<tr>';
	str += '				<th><span class="total_rate">&nbsp;<span></th>';
	str += '				<td class="filter_btn">';
	str += '					<div class="group">';
	str += '						<a href="javascript:void(0);" name="equal" class="btn bullet equal" title="equal"><span>동일</span></a>';
	// str += '						<a href="javascript:void(0);" name="hold" class="btn bullet hold" title="hold"><span>보류</span></a>';
	// str += '						<a href="javascript:void(0);" name="rework" class="btn bullet rework" title="rework"><span>재확인</span></a>';
	// str +='						<a href="javascript:void(0);" name="layer" class="btn bullet layer" title="layer"><span>레이어</span></a>';
	str += '						<a href="javascript:void(0);" name="popup" class="btn bullet popup" title="popup"><span>팝업</span></a>';
	// str += '						<a href="javascript:void(0);" name="new" class="btn bullet new" title="new"><span>신규</span></a>';
	str += '						<a href="javascript:void(0);" name="del" class="btn bullet del" title="del"><span>삭제</span></a>';
	str += '					</div>';
	str += '					<div class="group">';
	str += '						<div class="subgroup">';
	str += '							<a href="javascript:void(0);" name="app" class="btn bullet app" title="app"><span>APP</span></a>';
	str += '							<a href="javascript:void(0);" name="result" class="btn bullet result" title="result"><span>완료</span></a>';
	str += '						</div>';
	str += '						<div class="subgroup">';
	str += '							<a href="javascript:void(0);" name="web" class="btn bullet web" title="web"><span>WEB</span></a>';
	str += '							<a href="javascript:void(0);" name="result_ex" class="btn bullet result_ex" title="result_ex"><span>미완</span></a>';
	// str+='							<a href="javascript:void(0);" name="real" class="btn bullet real" title="real"><span>삭제제외</span></a>';
	str += '						</div>';
	str += '						<div class="subgroup">';
	str += '							<a href="javascript:void(0);" name="total" class="btn bullet total on" title="total"><span>전체</span></a>';
	str += '						</div>';
	str += '					</div>';
	str += '				</td>';
	str += '			</tr>';

	str += '			<tr>';
	str += '				<th><label for="id_search">Search</label></th>';
	str += '				<td class="search">';
	str += '					<input type="text" name="search" value="" id="id_search" placeholder="검색" class="input-search" />';
	str += '				</td>';
	str += '			</tr>';
	str += '		</tbody>';
	str += '		</table>';
	document.write(str);
}

function inc_IAHead() {
	var str = '';
	str += '<caption>작업 리스트</caption>';
	str += '<colgroup>';
	str += '	<col width="3%" /><!-- 번호 -->';
	str += '	<col class="depth2" style="width:13%" /><!-- 2Depth -->';
	str += '	<col class="depth3" style="width:14%" /><!-- 3Depth -->';
	str += '	<col class="depth4" style="width:12%" /><!-- 4Depth -->';
	str += '	<col class="depth5" style="width:11%" /><!-- Page -->';
	str += '	<col class="path" style="width:6%" /><!-- 경로 -->';
	// str+='	<col class="planner" style="width:4%" /><!-- 기획자 -->';
	str += '	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str += '	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str += '	<col class="info" style="width:14%" /><!-- 요약 -->';
	str += '	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str += '</colgroup>';
	str += '<thead>';
	str += '	<tr>';
	str += '		<th scope="col" class="num">No</th>';
	str += '		<th scope="col" class="depth2">Level1</th>';
	str += '		<th scope="col" class="depth3">Level2</th>';
	str += '		<th scope="col" class="depth4">Level3</th>';
	str += '		<th scope="col" class="depth5">Page</th>';
	str += '		<th scope="col" class="path">Path</th>';
	// str+='		<th scope="col" class="planner">기획자</th>';
	str += '		<th scope="col" class="rdate">End</th>';
	str += '		<th scope="col" class="mdate">Modify</th>';
	str += '		<th scope="col" class="info">Info</th>';
	str += '		<th scope="col" class="etc">Log</th>';
	str += '	</tr>';
	str += '</thead>';
	document.write(str);
}

function inc_IAHead_guide() {
	var str = '';
	str += '<caption>작업 리스트</caption>';
	str += '<colgroup>';
	str += '	<col width="3%" /><!-- 번호 -->';
	str += '	<col class="depth2" style="width:9%" /><!-- 2Depth -->';
	str += '	<col class="depth3" style="width:9%" /><!-- 3Depth -->';
	str += '	<col class="depth4" style="width:9%" /><!-- 4Depth -->';
	str += '	<col class="depth5" style="width:18%" /><!-- Page -->';
	str += '	<col class="path" style="width:10%" /><!-- 경로 -->';
	str += '	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str += '	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str += '	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str += '</colgroup>';
	str += '<thead>';
	str += '	<tr>';
	str += '		<th scope="col" class="num">No</th>';
	str += '		<th scope="col" class="depth2">Level2</th>';
	str += '		<th scope="col" class="depth3">Level3</th>';
	str += '		<th scope="col" class="depth4">Level4</th>';
	str += '		<th scope="col" class="depth5">Page</th>';
	str += '		<th scope="col" class="path">Path</th>';
	str += '		<th scope="col" class="rdate">End</th>';
	str += '		<th scope="col" class="mdate">Modify</th>';
	str += '		<th scope="col" class="etc">Etc</th>';
	str += '	</tr>';
	str += '</thead>';
	document.write(str);
}
