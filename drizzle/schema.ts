import { sqliteTable, AnySQLiteColumn, primaryKey, integer, uniqueIndex, numeric, text, index, real, blob } from "drizzle-orm/sqlite-core"
import { InferModel, sql } from "drizzle-orm"

/*
export const aaActions = sqliteTable("aa_actions", {
	aaid: integer("aaid").default(0).notNull(),
	rank: integer("rank").default(0).notNull(),
	reuseTime: integer("reuse_time").default(0).notNull(),
	spellId: integer("spell_id").default(0).notNull(),
	target: integer("target").default(0).notNull(),
	nonspellAction: integer("nonspell_action").default(0).notNull(),
	nonspellMana: integer("nonspell_mana").default(0).notNull(),
	nonspellDuration: integer("nonspell_duration").default(0).notNull(),
	reduxAa: integer("redux_aa").default(0).notNull(),
	reduxRate: integer("redux_rate").default(0).notNull(),
	reduxAa2: integer("redux_aa2").default(0).notNull(),
	reduxRate2: integer("redux_rate2").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.aaid, table.rank)
	}
});

export const aaEffects = sqliteTable("aa_effects", {
	id: integer("id").primaryKey().notNull(),
	aaid: integer("aaid").default(0).notNull(),
	slot: integer("slot").default(0).notNull(),
	effectid: integer("effectid").default(0).notNull(),
	base1: integer("base1").default(0).notNull(),
	base2: integer("base2").default(0).notNull(),
},
(table) => {
	return {
		newIndex: uniqueIndex("aa_effects_NewIndex").on(table.aaid, table.slot),
	}
});

export const account = sqliteTable("account", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	charname: text("charname").default('').notNull(),
	sharedplat: integer("sharedplat").default(0).notNull(),
	password: text("password").default('').notNull(),
	status: integer("status").default(0).notNull(),
	lsaccountId: integer("lsaccount_id"),
	forumId: integer("forum_id").default(0).notNull(),
	gmspeed: integer("gmspeed").default(0).notNull(),
	revoked: integer("revoked").default(0).notNull(),
	karma: integer("karma").default(0).notNull(),
	miniloginIp: text("minilogin_ip").default('').notNull(),
	hideme: integer("hideme").default(0).notNull(),
	rulesflag: integer("rulesflag").default(0).notNull(),
	suspendeduntil: text("suspendeduntil").default(0000-00-00 00:00:00).notNull(),
	timeCreation: integer("time_creation").default(0).notNull(),
	expansion: integer("expansion").default(12).notNull(),
	banReason: text("ban_reason"),
	suspendReason: text("suspend_reason"),
	active: integer("active").default(0).notNull(),
	ipExemptionMultiplier: integer("ip_exemption_multiplier").default(1),
	gminvul: integer("gminvul").default(0).notNull(),
	flymode: integer("flymode").default(0).notNull(),
	ignoreTells: integer("ignore_tells").default(0).notNull(),
	mule: integer("mule").default(0).notNull(),
},
(table) => {
	return {
		name: uniqueIndex("account_name").on(table.name),
		lsaccountId: uniqueIndex("account_lsaccount_id").on(table.lsaccountId),
	}
});

export const accountFlags = sqliteTable("account_flags", {
	pAccid: integer("p_accid").notNull(),
	pFlag: text("p_flag").notNull(),
	pValue: text("p_value").notNull(),
},
(table) => {
	return {
		pAccid: index("account_flags_p_accid").on(table.pAccid),
		pk0: primaryKey(table.pAccid, table.pFlag)
	}
});

export const accountIp = sqliteTable("account_ip", {
	accid: integer("accid").default(0).notNull(),
	ip: text("ip").default('').notNull(),
	count: integer("count").default(1).notNull(),
	lastused: text("lastused").default(current_timestamp()).notNull(),
},
(table) => {
	return {
		ip: uniqueIndex("account_ip_ip").on(table.accid, table.ip),
	}
});

export const accountRewards = sqliteTable("account_rewards", {
	accountId: integer("account_id").notNull(),
	rewardId: integer("reward_id").notNull(),
	amount: integer("amount").notNull(),
},
(table) => {
	return {
		accountReward: uniqueIndex("account_rewards_account_reward").on(table.accountId, table.rewardId),
		accountId: index("account_rewards_account_id").on(table.accountId),
	}
});

export const altadvVars = sqliteTable("altadv_vars", {
	skillId: integer("skill_id").default(0).primaryKey().notNull(),
	name: text("name"),
	cost: integer("cost"),
	maxLevel: integer("max_level"),
	type: integer("type").default(1).notNull(),
	spellid: integer("spellid").default(0).notNull(),
	prereqSkill: integer("prereq_skill").default(0).notNull(),
	prereqMinpoints: integer("prereq_minpoints").default(0).notNull(),
	spellType: integer("spell_type").default(0).notNull(),
	spellRefresh: integer("spell_refresh").default(0).notNull(),
	classes: integer("classes").default(65534).notNull(),
	classType: integer("class_type").default(0).notNull(),
	costInc: integer("cost_inc").default(0).notNull(),
	aaExpansion: integer("aa_expansion").default(3).notNull(),
	specialCategory: integer("special_category").default(4294967295).notNull(),
	accountTimeRequired: integer("account_time_required").default(0).notNull(),
	levelInc: integer("level_inc").default(0).notNull(),
	eqmacid: integer("eqmacid").default(0).notNull(),
});

export const bannedIps = sqliteTable("banned_ips", {
	ipAddress: text("ip_address").default(0).primaryKey().notNull(),
	notes: text("notes"),
});

export const baseData = sqliteTable("base_data", {
	level: integer("level").notNull(),
	class: integer("class").notNull(),
	hp: real("hp").notNull(),
	mana: real("mana").notNull(),
	end: real("end").notNull(),
	unk1: real("unk1").notNull(),
	unk2: real("unk2").notNull(),
	hpFac: real("hp_fac").notNull(),
	manaFac: real("mana_fac").notNull(),
	endFac: real("end_fac").notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.class, table.level)
	}
});

export const blockedSpells = sqliteTable("blocked_spells", {
	id: integer("id").primaryKey().notNull(),
	spellid: integer("spellid").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	xDiff: real("x_diff").default(0).notNull(),
	yDiff: real("y_diff").default(0).notNull(),
	zDiff: real("z_diff").default(0).notNull(),
	message: text("message").default('').notNull(),
	description: text("description").default('').notNull(),
});

export const books = sqliteTable("books", {
	name: text("name").default('').notNull(),
	txtfile: text("txtfile").notNull(),
},
(table) => {
	return {
		id: uniqueIndex("books_id").on(table.name),
	}
});

export const bugs = sqliteTable("bugs", {
	id: integer("id").primaryKey().notNull(),
	zone: text("zone").notNull(),
	name: text("name").notNull(),
	ui: text("ui").notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	type: text("type").notNull(),
	flag: integer("flag").notNull(),
	target: text("target"),
	bug: text("bug").notNull(),
	date: text("date").notNull(),
	status: integer("status").default(0).notNull(),
	canDuplicate: integer("_can_duplicate").default(0).notNull(),
	crashBug: integer("_crash_bug").default(0).notNull(),
	targetInfo: integer("_target_info").default(0).notNull(),
	characterFlags: integer("_character_flags").default(0).notNull(),
},
(table) => {
	return {
		id: uniqueIndex("bugs_id").on(table.id),
	}
});

export const characterAlternateAbilities = sqliteTable("character_alternate_abilities", {
	id: integer("id").default(0).notNull(),
	slot: integer("slot").default(0).notNull(),
	aaId: integer("aa_id").default(0).notNull(),
	aaValue: integer("aa_value").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_alternate_abilities_id").on(table.id),
		pk0: primaryKey(table.id, table.slot)
	}
});

export const characterBind = sqliteTable("character_bind", {
	id: integer("id").notNull(),
	isHome: integer("is_home").default(0).notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_bind_id").on(table.id),
		pk0: primaryKey(table.id, table.isHome)
	}
});

export const characterBuffs = sqliteTable("character_buffs", {
	id: integer("id").default(0).notNull(),
	slotId: integer("slot_id").notNull(),
	spellId: integer("spell_id").notNull(),
	casterLevel: integer("caster_level").notNull(),
	casterName: text("caster_name").notNull(),
	ticsremaining: integer("ticsremaining").notNull(),
	counters: integer("counters").notNull(),
	meleeRune: integer("melee_rune").notNull(),
	magicRune: integer("magic_rune").notNull(),
	persistent: integer("persistent").notNull(),
	extraDiChance: integer("ExtraDIChance").default(0).notNull(),
	bardModifier: integer("bard_modifier").default(10).notNull(),
},
(table) => {
	return {
		characterId: index("character_buffs_character_id").on(table.id),
		pk0: primaryKey(table.id, table.slotId)
	}
});

export const characterConsent = sqliteTable("character_consent", {
	name: text("name").default('').notNull(),
	consenterName: text("consenter_name").default('').notNull(),
	corpseId: integer("corpse_id").default(0).notNull(),
},
(table) => {
	return {
		name: index("character_consent_name").on(table.name),
	}
});

export const characterCorpses = sqliteTable("character_corpses", {
	id: integer("id").primaryKey().notNull(),
	charid: integer("charid").default(0).notNull(),
	charname: text("charname").default('').notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	timeOfDeath: text("time_of_death").default(0000-00-00 00:00:00).notNull(),
	rezTime: integer("rez_time").default(0).notNull(),
	isRezzed: integer("is_rezzed").default(0),
	isBuried: integer("is_buried").default(0).notNull(),
	wasAtGraveyard: integer("was_at_graveyard").default(0).notNull(),
	isLocked: integer("is_locked").default(0),
	exp: integer("exp").default(0),
	gmexp: integer("gmexp").default(0).notNull(),
	size: integer("size").default(0),
	level: integer("level").default(0),
	race: integer("race").default(0),
	gender: integer("gender").default(0),
	class: integer("class").default(0),
	deity: integer("deity").default(0),
	texture: integer("texture").default(0),
	helmTexture: integer("helm_texture").default(0),
	copper: integer("copper").default(0),
	silver: integer("silver").default(0),
	gold: integer("gold").default(0),
	platinum: integer("platinum").default(0),
	hairColor: integer("hair_color").default(0),
	beardColor: integer("beard_color").default(0),
	eyeColor1: integer("eye_color_1").default(0),
	eyeColor2: integer("eye_color_2").default(0),
	hairStyle: integer("hair_style").default(0),
	face: integer("face").default(0),
	beard: integer("beard").default(0),
	wc1: integer("wc_1").default(0),
	wc2: integer("wc_2").default(0),
	wc3: integer("wc_3").default(0),
	wc4: integer("wc_4").default(0),
	wc5: integer("wc_5").default(0),
	wc6: integer("wc_6").default(0),
	wc7: integer("wc_7").default(0),
	wc8: integer("wc_8").default(0),
	wc9: integer("wc_9").default(0),
	killedby: integer("killedby").default(0).notNull(),
	rezzable: integer("rezzable").default(1).notNull(),
},
(table) => {
	return {
		zoneid: index("character_corpses_zoneid").on(table.zoneId),
	}
});

export const characterCorpsesBackup = sqliteTable("character_corpses_backup", {
	id: integer("id").default(0).primaryKey().notNull(),
	charid: integer("charid").default(0).notNull(),
	charname: text("charname").default('').notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	timeOfDeath: text("time_of_death").default(0000-00-00 00:00:00).notNull(),
	rezTime: integer("rez_time").default(0).notNull(),
	isRezzed: integer("is_rezzed").default(0),
	isBuried: integer("is_buried").default(0).notNull(),
	wasAtGraveyard: integer("was_at_graveyard").default(0).notNull(),
	isLocked: integer("is_locked").default(0),
	exp: integer("exp").default(0),
	gmexp: integer("gmexp").default(0).notNull(),
	size: integer("size").default(0),
	level: integer("level").default(0),
	race: integer("race").default(0),
	gender: integer("gender").default(0),
	class: integer("class").default(0),
	deity: integer("deity").default(0),
	texture: integer("texture").default(0),
	helmTexture: integer("helm_texture").default(0),
	copper: integer("copper").default(0),
	silver: integer("silver").default(0),
	gold: integer("gold").default(0),
	platinum: integer("platinum").default(0),
	hairColor: integer("hair_color").default(0),
	beardColor: integer("beard_color").default(0),
	eyeColor1: integer("eye_color_1").default(0),
	eyeColor2: integer("eye_color_2").default(0),
	hairStyle: integer("hair_style").default(0),
	face: integer("face").default(0),
	beard: integer("beard").default(0),
	wc1: integer("wc_1").default(0),
	wc2: integer("wc_2").default(0),
	wc3: integer("wc_3").default(0),
	wc4: integer("wc_4").default(0),
	wc5: integer("wc_5").default(0),
	wc6: integer("wc_6").default(0),
	wc7: integer("wc_7").default(0),
	wc8: integer("wc_8").default(0),
	wc9: integer("wc_9").default(0),
	killedby: integer("killedby").default(0).notNull(),
	rezzable: integer("rezzable").default(1).notNull(),
});

export const characterCorpseItems = sqliteTable("character_corpse_items", {
	corpseId: integer("corpse_id").notNull(),
	equipSlot: integer("equip_slot").notNull(),
	itemId: integer("item_id"),
	charges: integer("charges"),
	aug1: integer("aug_1").default(0),
	aug2: integer("aug_2").default(0),
	aug3: integer("aug_3").default(0),
	aug4: integer("aug_4").default(0),
	aug5: integer("aug_5").default(0),
	serialnumber: integer("serialnumber").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.corpseId, table.equipSlot)
	}
});

export const characterCorpseItemsBackup = sqliteTable("character_corpse_items_backup", {
	corpseId: integer("corpse_id").notNull(),
	equipSlot: integer("equip_slot").notNull(),
	itemId: integer("item_id"),
	charges: integer("charges"),
	aug1: integer("aug_1").default(0),
	aug2: integer("aug_2").default(0),
	aug3: integer("aug_3").default(0),
	aug4: integer("aug_4").default(0),
	aug5: integer("aug_5").default(0),
	serialnumber: integer("serialnumber").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.corpseId, table.equipSlot)
	}
});

export const characterCurrency = sqliteTable("character_currency", {
	id: integer("id").default(0).primaryKey().notNull(),
	platinum: integer("platinum").default(0).notNull(),
	gold: integer("gold").default(0).notNull(),
	silver: integer("silver").default(0).notNull(),
	copper: integer("copper").default(0).notNull(),
	platinumBank: integer("platinum_bank").default(0).notNull(),
	goldBank: integer("gold_bank").default(0).notNull(),
	silverBank: integer("silver_bank").default(0).notNull(),
	copperBank: integer("copper_bank").default(0).notNull(),
	platinumCursor: integer("platinum_cursor").default(0).notNull(),
	goldCursor: integer("gold_cursor").default(0).notNull(),
	silverCursor: integer("silver_cursor").default(0).notNull(),
	copperCursor: integer("copper_cursor").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_currency_id").on(table.id),
	}
});

export const characterData = sqliteTable("character_data", {
	id: integer("id").primaryKey().notNull(),
	accountId: integer("account_id").default(0).notNull(),
	forumId: integer("forum_id").default(0).notNull(),
	name: text("name").default('').notNull(),
	lastName: text("last_name").default('').notNull(),
	title: text("title").default('').notNull(),
	suffix: text("suffix").default('').notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	y: real("y").default(0).notNull(),
	x: real("x").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	gender: integer("gender").default(0).notNull(),
	race: integer("race").default(0).notNull(),
	class: integer("class").default(0).notNull(),
	level: integer("level").default(0).notNull(),
	deity: integer("deity").default(0).notNull(),
	birthday: integer("birthday").default(0).notNull(),
	lastLogin: integer("last_login").default(0).notNull(),
	timePlayed: integer("time_played").default(0).notNull(),
	level2: integer("level2").default(0).notNull(),
	anon: integer("anon").default(0).notNull(),
	gm: integer("gm").default(0).notNull(),
	face: integer("face").default(0).notNull(),
	hairColor: integer("hair_color").default(0).notNull(),
	hairStyle: integer("hair_style").default(0).notNull(),
	beard: integer("beard").default(0).notNull(),
	beardColor: integer("beard_color").default(0).notNull(),
	eyeColor1: integer("eye_color_1").default(0).notNull(),
	eyeColor2: integer("eye_color_2").default(0).notNull(),
	exp: integer("exp").default(0).notNull(),
	aaPointsSpent: integer("aa_points_spent").default(0).notNull(),
	aaExp: integer("aa_exp").default(0).notNull(),
	aaPoints: integer("aa_points").default(0).notNull(),
	points: integer("points").default(0).notNull(),
	curHp: integer("cur_hp").default(0).notNull(),
	mana: integer("mana").default(0).notNull(),
	endurance: integer("endurance").default(0).notNull(),
	intoxication: integer("intoxication").default(0).notNull(),
	str: integer("str").default(0).notNull(),
	sta: integer("sta").default(0).notNull(),
	cha: integer("cha").default(0).notNull(),
	dex: integer("dex").default(0).notNull(),
	int: integer("int").default(0).notNull(),
	agi: integer("agi").default(0).notNull(),
	wis: integer("wis").default(0).notNull(),
	zoneChangeCount: integer("zone_change_count").default(0).notNull(),
	hungerLevel: integer("hunger_level").default(0).notNull(),
	thirstLevel: integer("thirst_level").default(0).notNull(),
	pvpStatus: integer("pvp_status").default(0).notNull(),
	airRemaining: integer("air_remaining").default(0).notNull(),
	autosplitEnabled: integer("autosplit_enabled").default(0).notNull(),
	mailkey: text("mailkey").default('').notNull(),
	firstlogon: integer("firstlogon").default(0).notNull(),
	eAaEffects: integer("e_aa_effects").default(0).notNull(),
	ePercentToAa: integer("e_percent_to_aa").default(0).notNull(),
	eExpendedAaSpent: integer("e_expended_aa_spent").default(0).notNull(),
	boatid: integer("boatid").default(0).notNull(),
	boatname: text("boatname"),
	famished: integer("famished").default(0).notNull(),
	isDeleted: integer("is_deleted").default(0).notNull(),
	showhelm: integer("showhelm").default(1).notNull(),
},
(table) => {
	return {
		name: uniqueIndex("character_data_name").on(table.name),
		accountId: index("character_data_account_id").on(table.accountId),
	}
});

export const characterFactionValues = sqliteTable("character_faction_values", {
	id: integer("id").default(0).notNull(),
	factionId: integer("faction_id").default(0).notNull(),
	currentValue: integer("current_value").default(0).notNull(),
	temp: integer("temp").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.factionId, table.id)
	}
});

export const characterInspectMessages = sqliteTable("character_inspect_messages", {
	id: integer("id").default(0).primaryKey().notNull(),
	inspectMessage: text("inspect_message").default('').notNull(),
},
(table) => {
	return {
		id: index("character_inspect_messages_id").on(table.id),
	}
});

export const characterInventory = sqliteTable("character_inventory", {
	id: integer("id").default(0).notNull(),
	slotid: integer("slotid").default(0).notNull(),
	itemid: integer("itemid").default(0),
	charges: integer("charges").default(0),
	customData: text("custom_data"),
	serialnumber: integer("serialnumber").default(0).notNull(),
	initialserial: integer("initialserial").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.slotid)
	}
});

export const characterKeyring = sqliteTable("character_keyring", {
	id: integer("id").default(0).notNull(),
	itemId: integer("item_id").default(0).notNull(),
});

export const characterLanguages = sqliteTable("character_languages", {
	id: integer("id").notNull(),
	langId: integer("lang_id").default(0).notNull(),
	value: integer("value").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_languages_id").on(table.id),
		pk0: primaryKey(table.id, table.langId)
	}
});

export const characterLookup = sqliteTable("character_lookup", {
	id: integer("id").primaryKey().notNull(),
	accountId: integer("account_id").default(0).notNull(),
	name: text("name").default('').notNull(),
	timelaston: integer("timelaston").default(0),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	zonename: text("zonename").default('').notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	instanceid: integer("instanceid").default(0).notNull(),
	pktime: integer("pktime").default(0).notNull(),
	groupid: integer("groupid").default(0).notNull(),
	class: integer("class").default(0).notNull(),
	level: integer("level").default(0).notNull(),
	lfp: integer("lfp").default(0).notNull(),
	lfg: integer("lfg").default(0).notNull(),
	mailkey: text("mailkey").notNull(),
	xtargets: integer("xtargets").default(5).notNull(),
	firstlogon: integer("firstlogon").default(0).notNull(),
	inspectmessage: text("inspectmessage").default('').notNull(),
},
(table) => {
	return {
		name: uniqueIndex("character_lookup_name").on(table.name),
		accountId: index("character_lookup_account_id").on(table.accountId),
	}
});

export const characterMemmedSpells = sqliteTable("character_memmed_spells", {
	id: integer("id").default(0).notNull(),
	slotId: integer("slot_id").default(0).notNull(),
	spellId: integer("spell_id").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_memmed_spells_id").on(table.id),
		pk0: primaryKey(table.id, table.slotId)
	}
});

export const characterPetBuffs = sqliteTable("character_pet_buffs", {
	charId: integer("char_id").notNull(),
	pet: integer("pet").notNull(),
	slot: integer("slot").notNull(),
	spellId: integer("spell_id").notNull(),
	casterLevel: integer("caster_level").default(0).notNull(),
	castername: text("castername").default('').notNull(),
	ticsremaining: integer("ticsremaining").default(0).notNull(),
	counters: integer("counters").default(0).notNull(),
	numhits: integer("numhits").default(0).notNull(),
	rune: integer("rune").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charId, table.pet, table.slot)
	}
});

export const characterPetInfo = sqliteTable("character_pet_info", {
	charId: integer("char_id").notNull(),
	pet: integer("pet").notNull(),
	petname: text("petname").default('').notNull(),
	petpower: integer("petpower").default(0).notNull(),
	spellId: integer("spell_id").default(0).notNull(),
	hp: integer("hp").default(0).notNull(),
	mana: integer("mana").default(0).notNull(),
	size: real("size").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charId, table.pet)
	}
});

export const characterPetInventory = sqliteTable("character_pet_inventory", {
	charId: integer("char_id").notNull(),
	pet: integer("pet").notNull(),
	slot: integer("slot").notNull(),
	itemId: integer("item_id").notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charId, table.pet, table.slot)
	}
});

export const characterSkills = sqliteTable("character_skills", {
	id: integer("id").notNull(),
	skillId: integer("skill_id").default(0).notNull(),
	value: integer("value").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_skills_id").on(table.id),
		pk0: primaryKey(table.id, table.skillId)
	}
});

export const characterSoulmarks = sqliteTable("character_soulmarks", {
	id: integer("id").primaryKey().notNull(),
	charid: integer("charid").default(0).notNull(),
	charname: text("charname").default('').notNull(),
	acctname: text("acctname").default('').notNull(),
	gmname: text("gmname").default('').notNull(),
	gmacctname: text("gmacctname").default('').notNull(),
	utime: integer("utime").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	desc: text("desc").default('').notNull(),
});

export const characterSpells = sqliteTable("character_spells", {
	id: integer("id").notNull(),
	slotId: integer("slot_id").default(0).notNull(),
	spellId: integer("spell_id").default(0).notNull(),
},
(table) => {
	return {
		id: index("character_spells_id").on(table.id),
		pk0: primaryKey(table.id, table.slotId)
	}
});

export const characterTimers = sqliteTable("character_timers", {
	id: integer("id").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	start: integer("start").default(0).notNull(),
	duration: integer("duration").default(0).notNull(),
	enable: integer("enable").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.type)
	}
});

export const characterZoneFlags = sqliteTable("character_zone_flags", {
	id: integer("id").default(0).notNull(),
	zoneId: integer("zoneID").default(0).notNull(),
	key: integer("key_").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.zoneId)
	}
});

export const charCreateCombinations = sqliteTable("char_create_combinations", {
	allocationId: integer("allocation_id").notNull(),
	race: integer("race").notNull(),
	class: integer("class").notNull(),
	deity: integer("deity").notNull(),
	startZone: integer("start_zone").notNull(),
	expansionsReq: integer("expansions_req").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.class, table.deity, table.race, table.startZone)
	}
});

export const charCreatePointAllocations = sqliteTable("char_create_point_allocations", {
	id: integer("id").primaryKey().notNull(),
	baseStr: integer("base_str").notNull(),
	baseSta: integer("base_sta").notNull(),
	baseDex: integer("base_dex").notNull(),
	baseAgi: integer("base_agi").notNull(),
	baseInt: integer("base_int").notNull(),
	baseWis: integer("base_wis").notNull(),
	baseCha: integer("base_cha").notNull(),
	allocStr: integer("alloc_str").notNull(),
	allocSta: integer("alloc_sta").notNull(),
	allocDex: integer("alloc_dex").notNull(),
	allocAgi: integer("alloc_agi").notNull(),
	allocInt: integer("alloc_int").notNull(),
	allocWis: integer("alloc_wis").notNull(),
	allocCha: integer("alloc_cha").notNull(),
});

export const chatchannels = sqliteTable("chatchannels", {
	name: text("name").default('').primaryKey().notNull(),
	owner: text("owner").default('').notNull(),
	password: text("password").default('').notNull(),
	minstatus: integer("minstatus").default(0).notNull(),
});

export const clientVersion = sqliteTable("client_version", {
	accountId: integer("account_id").default(0).primaryKey().notNull(),
	version: integer("version_").default(0).notNull(),
});

export const commandsLog = sqliteTable("commands_log", {
	entryId: integer("entry_id").primaryKey().notNull(),
	charName: text("char_name"),
	acctName: text("acct_name"),
	y: real("y").default(0).notNull(),
	x: real("x").default(0).notNull(),
	z: real("z").default(0).notNull(),
	command: text("command"),
	targetType: text("target_type"),
	target: text("target"),
	tarY: real("tar_y").default(0).notNull(),
	tarX: real("tar_x").default(0).notNull(),
	tarZ: real("tar_z").default(0).notNull(),
	zoneId: integer("zone_id"),
	zoneName: text("zone_name"),
	time: text("time"),
});

export const commandSettings = sqliteTable("command_settings", {
	command: text("command").default('').primaryKey().notNull(),
	access: integer("access").default(0).notNull(),
	aliases: text("aliases").default('').notNull(),
},
(table) => {
	return {
		ukCommandSettings1: uniqueIndex("command_settings_UK_command_settings_1").on(table.command),
	}
});

export const damageshieldtypes = sqliteTable("damageshieldtypes", {
	spellid: integer("spellid").default(0).primaryKey().notNull(),
	type: integer("type").default(0).notNull(),
});

export const discoveredItems = sqliteTable("discovered_items", {
	itemId: integer("item_id").default(0).primaryKey().notNull(),
	charName: text("char_name").default('').notNull(),
	discoveredDate: integer("discovered_date").default(0).notNull(),
	accountStatus: integer("account_status").default(0).notNull(),
});

export const doors = sqliteTable("doors", {
	id: integer("id").primaryKey().notNull(),
	doorid: integer("doorid").default(0).notNull(),
	zone: text("zone"),
	name: text("name").default('').notNull(),
	posY: real("pos_y").default(0).notNull(),
	posX: real("pos_x").default(0).notNull(),
	posZ: real("pos_z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	opentype: integer("opentype").default(0).notNull(),
	lockpick: integer("lockpick").default(0).notNull(),
	keyitem: integer("keyitem").default(0).notNull(),
	altkeyitem: integer("altkeyitem").default(0).notNull(),
	nokeyring: integer("nokeyring").default(1).notNull(),
	triggerdoor: integer("triggerdoor").default(0).notNull(),
	triggertype: integer("triggertype").default(0).notNull(),
	doorisopen: integer("doorisopen").default(0).notNull(),
	doorParam: integer("door_param").default(0).notNull(),
	destZone: text("dest_zone").default(NONE),
	destX: real("dest_x").default(0),
	destY: real("dest_y").default(0),
	destZ: real("dest_z").default(0),
	destHeading: real("dest_heading").default(0),
	invertState: integer("invert_state").default(0),
	incline: integer("incline").default(0),
	size: integer("size").default(100).notNull(),
	clientVersionMask: integer("client_version_mask").default(4294967295).notNull(),
	islift: integer("islift").default(0).notNull(),
	closeTime: integer("close_time").default(5).notNull(),
	canOpen: integer("can_open").default(1).notNull(),
},
(table) => {
	return {
		doorIndex: uniqueIndex("doors_DoorIndex").on(table.zone, table.doorid),
	}
});

export const eqtime = sqliteTable("eqtime", {
	minute: integer("minute").default(0).notNull(),
	hour: integer("hour").default(0).notNull(),
	day: integer("day").default(0).notNull(),
	month: integer("month").default(0).notNull(),
	year: integer("year").default(0).notNull(),
	realtime: integer("realtime").default(0).notNull(),
});

export const eventlog = sqliteTable("eventlog", {
	id: integer("id").primaryKey().notNull(),
	accountname: text("accountname").default('').notNull(),
	accountid: integer("accountid").default(0),
	status: integer("status").default(0).notNull(),
	charname: text("charname").default('').notNull(),
	target: text("target").default(None),
	time: text("time").default(current_timestamp()).notNull(),
	descriptiontype: text("descriptiontype").default('').notNull(),
	description: text("description").notNull(),
	eventNid: integer("event_nid").default(0).notNull(),
});
*/
export const factionList = sqliteTable("faction_list", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	base: integer("base").default(0).notNull(),
	seeIllusion: integer("see_illusion").default(1).notNull(),
	minCap: integer("min_cap").default(0).notNull(),
	maxCap: integer("max_cap").default(0).notNull(),
},
(table) => {
	return {
		id: uniqueIndex("faction_list_id").on(table.id),
	}
});
/*
export const factionListMod = sqliteTable("faction_list_mod", {
	id: integer("id").primaryKey().notNull(),
	factionId: integer("faction_id").notNull(),
	mod: integer("mod").notNull(),
	modName: text("mod_name").notNull(),
},
(table) => {
	return {
		factionIdModName: uniqueIndex("faction_list_mod_faction_id_mod_name").on(table.factionId, table.modName),
	}
});

export const fishing = sqliteTable("fishing", {
	id: integer("id").primaryKey().notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	itemid: integer("Itemid").default(0).notNull(),
	skillLevel: integer("skill_level").default(0).notNull(),
	chance: integer("chance").default(0).notNull(),
});

export const forage = sqliteTable("forage", {
	id: integer("id").primaryKey().notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	itemid: integer("Itemid").default(0).notNull(),
	level: integer("level").default(0).notNull(),
	chance: integer("chance").default(0).notNull(),
});

export const friends = sqliteTable("friends", {
	charid: integer("charid").notNull(),
	type: integer("type").default(1).notNull(),
	name: text("name").notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charid, table.name, table.type)
	}
});

export const gmIps = sqliteTable("gm_ips", {
	name: text("name").notNull(),
	accountId: integer("account_id").notNull(),
	ipAddress: text("ip_address").notNull(),
},
(table) => {
	return {
		accountId2: uniqueIndex("gm_ips_account_id_2").on(table.accountId),
		accountId: uniqueIndex("gm_ips_account_id").on(table.accountId, table.ipAddress),
	}
});

export const goallists = sqliteTable("goallists", {
	listid: integer("listid").default(0).notNull(),
	entry: integer("entry").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.entry, table.listid)
	}
});

export const graveyard = sqliteTable("graveyard", {
	id: integer("id").primaryKey().notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
},
(table) => {
	return {
		zoneId: uniqueIndex("graveyard_zone_id").on(table.zoneId),
	}
});

export const grid = sqliteTable("grid", {
	id: integer("id").default(0).notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	type2: integer("type2").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.zoneid)
	}
});

export const gridEntries = sqliteTable("grid_entries", {
	gridid: integer("gridid").default(0).notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	number: integer("number").default(0).notNull(),
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	pause: integer("pause").default(0).notNull(),
	centerpoint: integer("centerpoint").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.gridid, table.number, table.zoneid)
	}
});

export const groundSpawns = sqliteTable("ground_spawns", {
	id: integer("id").primaryKey().notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	maxX: real("max_x").default(2000).notNull(),
	maxY: real("max_y").default(2000).notNull(),
	maxZ: real("max_z").default(10000).notNull(),
	minX: real("min_x").default(-2000).notNull(),
	minY: real("min_y").default(-2000).notNull(),
	heading: real("heading").default(0).notNull(),
	name: text("name").default('').notNull(),
	item: integer("item").default(0).notNull(),
	maxAllowed: integer("max_allowed").default(1).notNull(),
	comment: text("comment").default('').notNull(),
	respawnTimer: integer("respawn_timer").default(300000).notNull(),
},
(table) => {
	return {
		zone: index("ground_spawns_zone").on(table.zoneid),
	}
});

export const groupId = sqliteTable("group_id", {
	groupid: integer("groupid").notNull(),
	charid: integer("charid").notNull(),
	name: text("name").notNull(),
	accountid: integer("accountid").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charid, table.groupid)
	}
});

export const groupLeaders = sqliteTable("group_leaders", {
	gid: integer("gid").default(0).primaryKey().notNull(),
	leadername: text("leadername").default('').notNull(),
	oldleadername: text("oldleadername").default('').notNull(),
});

export const guilds = sqliteTable("guilds", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	leader: integer("leader").default(0).notNull(),
	minstatus: integer("minstatus").default(0).notNull(),
	motd: text("motd").notNull(),
	tribute: integer("tribute").default(0).notNull(),
	motdSetter: text("motd_setter").default('').notNull(),
	channel: text("channel").default('').notNull(),
	url: text("url").default('').notNull(),
},
(table) => {
	return {
		name: uniqueIndex("guilds_name").on(table.name),
		leader: uniqueIndex("guilds_leader").on(table.leader),
	}
});

export const guildMembers = sqliteTable("guild_members", {
	charId: integer("char_id").default(0).primaryKey().notNull(),
	guildId: integer("guild_id").default(0).notNull(),
	rank: integer("rank").default(0).notNull(),
	tributeEnable: integer("tribute_enable").default(0).notNull(),
	totalTribute: integer("total_tribute").default(0).notNull(),
	lastTribute: integer("last_tribute").default(0).notNull(),
	banker: integer("banker").default(0).notNull(),
	publicNote: text("public_note").notNull(),
	alt: integer("alt").default(0).notNull(),
});

export const guildRanks = sqliteTable("guild_ranks", {
	guildId: integer("guild_id").default(0).notNull(),
	rank: integer("rank").default(0).notNull(),
	title: text("title").default('').notNull(),
	canHear: integer("can_hear").default(0).notNull(),
	canSpeak: integer("can_speak").default(0).notNull(),
	canInvite: integer("can_invite").default(0).notNull(),
	canRemove: integer("can_remove").default(0).notNull(),
	canPromote: integer("can_promote").default(0).notNull(),
	canDemote: integer("can_demote").default(0).notNull(),
	canMotd: integer("can_motd").default(0).notNull(),
	canWarpeace: integer("can_warpeace").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.guildId, table.rank)
	}
});

export const hackers = sqliteTable("hackers", {
	id: integer("id").primaryKey().notNull(),
	account: text("account").notNull(),
	name: text("name").notNull(),
	hacked: text("hacked").notNull(),
	zone: text("zone"),
	date: text("date").default(current_timestamp()).notNull(),
});

export const horses = sqliteTable("horses", {
	filename: text("filename").default('').primaryKey().notNull(),
	race: integer("race").default(216).notNull(),
	gender: integer("gender").default(0).notNull(),
	texture: integer("texture").default(0).notNull(),
	mountspeed: real("mountspeed").default(0.75).notNull(),
	notes: text("notes").default(Notes),
});
*/
export const items = sqliteTable("items", {
	id: integer("id").default(0).notNull(),
	minstatus: integer("minstatus").default(0).notNull(),
	name: text("Name").default('').notNull(),
	aagi: integer("aagi").default(0).notNull(),
	ac: integer("ac").default(0).notNull(),
	acha: integer("acha").default(0).notNull(),
	adex: integer("adex").default(0).notNull(),
	aint: integer("aint").default(0).notNull(),
	asta: integer("asta").default(0).notNull(),
	astr: integer("astr").default(0).notNull(),
	awis: integer("awis").default(0).notNull(),
	bagsize: integer("bagsize").default(0).notNull(),
	bagslots: integer("bagslots").default(0).notNull(),
	bagtype: integer("bagtype").default(0).notNull(),
	bagwr: integer("bagwr").default(0).notNull(),
	banedmgamt: integer("banedmgamt").default(0).notNull(),
	banedmgbody: integer("banedmgbody").default(0).notNull(),
	banedmgrace: integer("banedmgrace").default(0).notNull(),
	bardtype: integer("bardtype").default(0).notNull(),
	bardvalue: integer("bardvalue").default(0).notNull(),
	book: integer("book").default(0).notNull(),
	casttime: integer("casttime").default(0).notNull(),
	casttime_: integer("casttime_").default(0).notNull(),
	classes: integer("classes").default(0).notNull(),
	color: integer("color").default(0).notNull(),
	price: integer("price").default(0).notNull(),
	cr: integer("cr").default(0).notNull(),
	damage: integer("damage").default(0).notNull(),
	deity: integer("deity").default(0).notNull(),
	delay: integer("delay").default(0).notNull(),
	dr: integer("dr").default(0).notNull(),
	clicktype: integer("clicktype").default(0).notNull(),
	clicklevel2: integer("clicklevel2").default(0).notNull(),
	elemdmgtype: integer("elemdmgtype").default(0).notNull(),
	elemdmgamt: integer("elemdmgamt").default(0).notNull(),
	factionamt1: integer("factionamt1").default(0).notNull(),
	factionamt2: integer("factionamt2").default(0).notNull(),
	factionamt3: integer("factionamt3").default(0).notNull(),
	factionamt4: integer("factionamt4").default(0).notNull(),
	factionmod1: integer("factionmod1").default(0).notNull(),
	factionmod2: integer("factionmod2").default(0).notNull(),
	factionmod3: integer("factionmod3").default(0).notNull(),
	factionmod4: integer("factionmod4").default(0).notNull(),
	filename: text("filename").default('').notNull(),
	focuseffect: integer("focuseffect").default(0).notNull(),
	fr: integer("fr").default(0).notNull(),
	fvnodrop: integer("fvnodrop").default(0).notNull(),
	clicklevel: integer("clicklevel").default(0).notNull(),
	hp: integer("hp").default(0).notNull(),
	icon: integer("icon").default(0).notNull(),
	idfile: text("idfile").default('').notNull(),
	itemclass: integer("itemclass").default(0).notNull(),
	itemtype: integer("itemtype").default(0).notNull(),
	light: integer("light").default(0).notNull(),
	lore: text("lore").default('').notNull(),
	magic: integer("magic").default(0).notNull(),
	mana: integer("mana").default(0).notNull(),
	material: integer("material").default(0).notNull(),
	maxcharges: integer("maxcharges").default(0).notNull(),
	mr: integer("mr").default(0).notNull(),
	nodrop: integer("nodrop").default(0).notNull(),
	norent: integer("norent").default(0).notNull(),
	pr: integer("pr").default(0).notNull(),
	procrate: integer("procrate").default(0).notNull(),
	races: integer("races").default(0).notNull(),
	range: integer("range").default(0).notNull(),
	reclevel: integer("reclevel").default(0).notNull(),
	recskill: integer("recskill").default(0).notNull(),
	reqlevel: integer("reqlevel").default(0).notNull(),
	sellrate: real("sellrate").default(0).notNull(),
	size: integer("size").default(0).notNull(),
	skillmodtype: integer("skillmodtype").default(0).notNull(),
	skillmodvalue: integer("skillmodvalue").default(0).notNull(),
	slots: integer("slots").default(0).notNull(),
	clickeffect: integer("clickeffect").default(0).notNull(),
	tradeskills: integer("tradeskills").default(0).notNull(),
	weight: integer("weight").default(0).notNull(),
	booktype: integer("booktype").default(0).notNull(),
	recastdelay: integer("recastdelay").default(0).notNull(),
	recasttype: integer("recasttype").default(0).notNull(),
	updated: text("updated").default('0000-00-00 00:00:00').notNull(),
	comment: text("comment").default('').notNull(),
	stacksize: integer("stacksize").default(0).notNull(),
	stackable: integer("stackable").default(0).notNull(),
	proceffect: integer("proceffect").default(0).notNull(),
	proctype: integer("proctype").default(0).notNull(),
	proclevel2: integer("proclevel2").default(0).notNull(),
	proclevel: integer("proclevel").default(0).notNull(),
	worneffect: integer("worneffect").default(0).notNull(),
	worntype: integer("worntype").default(0).notNull(),
	wornlevel2: integer("wornlevel2").default(0).notNull(),
	wornlevel: integer("wornlevel").default(0).notNull(),
	focustype: integer("focustype").default(0).notNull(),
	focuslevel2: integer("focuslevel2").default(0).notNull(),
	focuslevel: integer("focuslevel").default(0).notNull(),
	scrolleffect: integer("scrolleffect").default(0).notNull(),
	scrolltype: integer("scrolltype").default(0).notNull(),
	scrolllevel2: integer("scrolllevel2").default(0).notNull(),
	scrolllevel: integer("scrolllevel").default(0).notNull(),
	serialized: text("serialized"),
	verified: text("verified"),
	serialization: text("serialization"),
	source: text("source").default('').notNull(),
	lorefile: text("lorefile").default('').notNull(),
	questitemflag: integer("questitemflag").default(0).notNull(),
	clickunk5: integer("clickunk5").default(0).notNull(),
	clickunk6: text("clickunk6").default('').notNull(),
	clickunk7: integer("clickunk7").default(0).notNull(),
	procunk1: integer("procunk1").default(0).notNull(),
	procunk2: integer("procunk2").default(0).notNull(),
	procunk3: integer("procunk3").default(0).notNull(),
	procunk4: integer("procunk4").default(0).notNull(),
	procunk6: text("procunk6").default('').notNull(),
	procunk7: integer("procunk7").default(0).notNull(),
	wornunk1: integer("wornunk1").default(0).notNull(),
	wornunk2: integer("wornunk2").default(0).notNull(),
	wornunk3: integer("wornunk3").default(0).notNull(),
	wornunk4: integer("wornunk4").default(0).notNull(),
	wornunk5: integer("wornunk5").default(0).notNull(),
	wornunk6: text("wornunk6").default('').notNull(),
	wornunk7: integer("wornunk7").default(0).notNull(),
	focusunk1: integer("focusunk1").default(0).notNull(),
	focusunk2: integer("focusunk2").default(0).notNull(),
	focusunk3: integer("focusunk3").default(0).notNull(),
	focusunk4: integer("focusunk4").default(0).notNull(),
	focusunk5: integer("focusunk5").default(0).notNull(),
	focusunk6: text("focusunk6").default('').notNull(),
	focusunk7: integer("focusunk7").default(0).notNull(),
	scrollunk1: integer("scrollunk1").default(0).notNull(),
	scrollunk2: integer("scrollunk2").default(0).notNull(),
	scrollunk3: integer("scrollunk3").default(0).notNull(),
	scrollunk4: integer("scrollunk4").default(0).notNull(),
	scrollunk5: integer("scrollunk5").default(0).notNull(),
	scrollunk6: text("scrollunk6").default('').notNull(),
	scrollunk7: integer("scrollunk7").default(0).notNull(),
	clickname: text("clickname").default('').notNull(),
	procname: text("procname").default('').notNull(),
	wornname: text("wornname").default('').notNull(),
	focusname: text("focusname").default('').notNull(),
	scrollname: text("scrollname").default('').notNull(),
	created: text("created").default('').notNull(),
	bardeffect: integer("bardeffect").default(0).notNull(),
	bardeffecttype: integer("bardeffecttype").default(0).notNull(),
	bardlevel2: integer("bardlevel2").default(0).notNull(),
	bardlevel: integer("bardlevel").default(0).notNull(),
	bardunk1: integer("bardunk1").default(0).notNull(),
	bardunk2: integer("bardunk2").default(0).notNull(),
	bardunk3: integer("bardunk3").default(0).notNull(),
	bardunk4: integer("bardunk4").default(0).notNull(),
	bardunk5: integer("bardunk5").default(0).notNull(),
	bardname: text("bardname").default('').notNull(),
	bardunk7: integer("bardunk7").default(0).notNull(),
	gmflag: integer("gmflag").default(0).notNull(),
	soulbound: integer("soulbound").default(0).notNull(),
},
(table) => {
	return {
		nameIdx: index("items_name_idx").on(table.name),
		minstatus: index("items_minstatus").on(table.minstatus),
		loreIdx: index("items_lore_idx").on(table.lore),
		id: uniqueIndex("items_ID").on(table.id),
	}
});
/*
export const itemTick = sqliteTable("item_tick", {
	itItemid: integer("it_itemid").notNull(),
	itChance: integer("it_chance").notNull(),
	itLevel: integer("it_level").notNull(),
	itId: integer("it_id").primaryKey().notNull(),
	itQglobal: text("it_qglobal").notNull(),
	itBagslot: integer("it_bagslot").notNull(),
});

export const keyringData = sqliteTable("keyring_data", {
	keyItem: integer("key_item").default(0).notNull(),
	keyName: text("key_name").default('').notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	stage: integer("stage").default(0).notNull(),
});

export const launcher = sqliteTable("launcher", {
	name: text("name").default('').primaryKey().notNull(),
	dynamics: integer("dynamics").default(0).notNull(),
});

export const launcherZones = sqliteTable("launcher_zones", {
	launcher: text("launcher").default('').notNull(),
	zone: text("zone").default('').notNull(),
	port: integer("port").default(0).notNull(),
	enabled: integer("enabled").default(0),
	expansion: text("expansion"),
},
(table) => {
	return {
		pk0: primaryKey(table.launcher, table.zone)
	}
});

export const levelExpMods = sqliteTable("level_exp_mods", {
	level: integer("level").default(0).primaryKey().notNull(),
	expMod: real("exp_mod"),
	aaExpMod: real("aa_exp_mod"),
});

export const logsysCategories = sqliteTable("logsys_categories", {
	logCategoryId: integer("log_category_id").primaryKey().notNull(),
	logCategoryDescription: text("log_category_description"),
	logToConsole: integer("log_to_console").default(0),
	logToFile: integer("log_to_file").default(0),
	logToGmsay: integer("log_to_gmsay").default(0),
});

export const lootdrop = sqliteTable("lootdrop", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
});

export const lootdropEntries = sqliteTable("lootdrop_entries", {
	lootdropId: integer("lootdrop_id").default(0).notNull(),
	itemId: integer("item_id").default(0).notNull(),
	itemCharges: integer("item_charges").default(1).notNull(),
	equipItem: integer("equip_item").default(0).notNull(),
	chance: real("chance").default(1).notNull(),
	minlevel: integer("minlevel").default(0).notNull(),
	maxlevel: integer("maxlevel").default(255).notNull(),
	multiplier: integer("multiplier").default(1).notNull(),
	disabledChance: real("disabled_chance").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.itemId, table.lootdropId)
	}
});

export const loottable = sqliteTable("loottable", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	mincash: integer("mincash").default(0).notNull(),
	maxcash: integer("maxcash").default(0).notNull(),
	avgcoin: integer("avgcoin").default(0).notNull(),
	done: integer("done").default(0).notNull(),
});

export const loottableEntries = sqliteTable("loottable_entries", {
	loottableId: integer("loottable_id").default(0).notNull(),
	lootdropId: integer("lootdrop_id").default(0).notNull(),
	multiplier: integer("multiplier").default(1).notNull(),
	probability: integer("probability").default(100).notNull(),
	droplimit: integer("droplimit").default(0).notNull(),
	mindrop: integer("mindrop").default(0).notNull(),
	multiplierMin: integer("multiplier_min").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.lootdropId, table.loottableId)
	}
});

export const mail = sqliteTable("mail", {
	msgid: integer("msgid").primaryKey().notNull(),
	charid: integer("charid").default(0).notNull(),
	timestamp: integer("timestamp").default(0).notNull(),
	from: text("from").default('').notNull(),
	subject: text("subject").default('').notNull(),
	body: text("body").notNull(),
	to: text("to").notNull(),
	status: integer("status").default(0).notNull(),
},
(table) => {
	return {
		charid: index("mail_charid").on(table.charid),
	}
});

export const merchantlist = sqliteTable("merchantlist", {
	merchantid: integer("merchantid").default(0).notNull(),
	slot: integer("slot").default(0).notNull(),
	item: integer("item").default(0).notNull(),
	factionRequired: integer("faction_required").default(-100).notNull(),
	levelRequired: integer("level_required").default(0).notNull(),
	altCurrencyCost: integer("alt_currency_cost").default(0).notNull(),
	classesRequired: integer("classes_required").default(65535).notNull(),
	probability: integer("probability").default(100).notNull(),
	quantity: integer("quantity").default(0).notNull(),
},
(table) => {
	return {
		merchantid: uniqueIndex("merchantlist_merchantid").on(table.merchantid, table.item),
		item: index("merchantlist_item").on(table.item),
		pk0: primaryKey(table.merchantid, table.slot)
	}
});

export const merchantlistTemp = sqliteTable("merchantlist_temp", {
	npcid: integer("npcid").default(0).notNull(),
	slot: integer("slot").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	charges: integer("charges").default(1).notNull(),
	quantity: integer("quantity").default(0).notNull(),
},
(table) => {
	return {
		npcid2: index("merchantlist_temp_npcid_2").on(table.npcid, table.itemid),
		pk0: primaryKey(table.npcid, table.slot)
	}
});

export const nameFilter = sqliteTable("name_filter", {
	name: text("name").default('').primaryKey().notNull(),
});

export const npcEmotes = sqliteTable("npc_emotes", {
	id: integer("id").primaryKey().notNull(),
	emoteid: integer("emoteid").default(0).notNull(),
	event: integer("event_").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	text: text("text").notNull(),
});

export const npcFaction = sqliteTable("npc_faction", {
	id: integer("id").primaryKey().notNull(),
	name: text("name"),
	primaryfaction: integer("primaryfaction").default(0).notNull(),
	ignorePrimaryAssist: integer("ignore_primary_assist").default(0).notNull(),
});

export const npcFactionEntries = sqliteTable("npc_faction_entries", {
	npcFactionId: integer("npc_faction_id").default(0).notNull(),
	factionId: integer("faction_id").default(0).notNull(),
	value: integer("value").default(0).notNull(),
	npcValue: integer("npc_value").default(0).notNull(),
	temp: integer("temp").default(0).notNull(),
	sortOrder: integer("sort_order").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.factionId, table.npcFactionId)
	}
});

export const npcSpells = sqliteTable("npc_spells", {
	id: integer("id").primaryKey().notNull(),
	name: text("name"),
	parentList: integer("parent_list").default(0).notNull(),
	attackProc: integer("attack_proc").default(-1).notNull(),
	procChance: integer("proc_chance").default(3).notNull(),
	rangeProc: integer("range_proc").default(-1).notNull(),
	rprocChance: integer("rproc_chance").default(0).notNull(),
	defensiveProc: integer("defensive_proc").default(-1).notNull(),
	dprocChance: integer("dproc_chance").default(0).notNull(),
	failRecast: integer("fail_recast").default(0).notNull(),
	engagedNoSpRecastMin: integer("engaged_no_sp_recast_min").default(0).notNull(),
	engagedNoSpRecastMax: integer("engaged_no_sp_recast_max").default(0).notNull(),
	engagedBSelfChance: integer("engaged_b_self_chance").default(0).notNull(),
	engagedBOtherChance: integer("engaged_b_other_chance").default(0).notNull(),
	engagedDChance: integer("engaged_d_chance").default(0).notNull(),
	pursueNoSpRecastMin: integer("pursue_no_sp_recast_min").default(0).notNull(),
	pursueNoSpRecastMax: integer("pursue_no_sp_recast_max").default(0).notNull(),
	pursueDChance: integer("pursue_d_chance").default(0).notNull(),
	idleNoSpRecastMin: integer("idle_no_sp_recast_min").default(0).notNull(),
	idleNoSpRecastMax: integer("idle_no_sp_recast_max").default(0).notNull(),
	idleBChance: integer("idle_b_chance").default(0).notNull(),
});

export const npcSpellsEffects = sqliteTable("npc_spells_effects", {
	id: integer("id").primaryKey().notNull(),
	name: text("name"),
	parentList: integer("parent_list").default(0).notNull(),
});

export const npcSpellsEffectsEntries = sqliteTable("npc_spells_effects_entries", {
	id: integer("id").primaryKey().notNull(),
	npcSpellsEffectsId: integer("npc_spells_effects_id").default(0).notNull(),
	spellEffectId: integer("spell_effect_id").default(0).notNull(),
	minlevel: integer("minlevel").default(0).notNull(),
	maxlevel: integer("maxlevel").default(255).notNull(),
	seBase: integer("se_base").default(0).notNull(),
	seLimit: integer("se_limit").default(0).notNull(),
	seMax: integer("se_max").default(0).notNull(),
},
(table) => {
	return {
		spellsidSpellid: uniqueIndex("npc_spells_effects_entries_spellsid_spellid").on(table.npcSpellsEffectsId, table.spellEffectId),
	}
});

export const npcSpellsEntries = sqliteTable("npc_spells_entries", {
	id: integer("id").primaryKey().notNull(),
	npcSpellsId: integer("npc_spells_id").default(0).notNull(),
	spellid: integer("spellid").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	minlevel: integer("minlevel").default(0).notNull(),
	maxlevel: integer("maxlevel").default(255).notNull(),
	manacost: integer("manacost").default(-1).notNull(),
	recastDelay: integer("recast_delay").default(-1).notNull(),
	priority: integer("priority").default(0).notNull(),
	resistAdjust: integer("resist_adjust"),
},
(table) => {
	return {
		spellsidSpellid: uniqueIndex("npc_spells_entries_spellsid_spellid").on(table.npcSpellsId, table.spellid),
	}
});
*/
export const npcTypes = sqliteTable("npc_types", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").notNull(),
	lastname: text("lastname"),
	level: integer("level").default(0).notNull(),
	race: integer("race").default(0).notNull(),
	class: integer("class").default(0).notNull(),
	bodytype: integer("bodytype").default(1).notNull(),
	hp: integer("hp").default(0).notNull(),
	mana: integer("mana").default(0).notNull(),
	gender: integer("gender").default(0).notNull(),
	texture: integer("texture").default(0).notNull(),
	helmtexture: integer("helmtexture").default(0).notNull(),
	size: real("size").default(0).notNull(),
	hpRegenRate: integer("hp_regen_rate").default(0).notNull(),
	manaRegenRate: integer("mana_regen_rate").default(0).notNull(),
	loottableId: integer("loottable_id").default(0).notNull(),
	merchantId: integer("merchant_id").default(0).notNull(),
	npcSpellsId: integer("npc_spells_id").default(0).notNull(),
	npcSpellsEffectsId: integer("npc_spells_effects_id").default(0).notNull(),
	npcFactionId: integer("npc_faction_id").default(0).notNull(),
	mindmg: integer("mindmg").default(0).notNull(),
	maxdmg: integer("maxdmg").default(0).notNull(),
	attackCount: integer("attack_count").default(-1).notNull(),
	specialAbilities: text("special_abilities"),
	aggroradius: integer("aggroradius").default(0).notNull(),
	assistradius: integer("assistradius").default(0).notNull(),
	face: integer("face").default(1).notNull(),
	luclinHairstyle: integer("luclin_hairstyle").default(1).notNull(),
	luclinHaircolor: integer("luclin_haircolor").default(1).notNull(),
	luclinEyecolor: integer("luclin_eyecolor").default(1).notNull(),
	luclinEyecolor2: integer("luclin_eyecolor2").default(1).notNull(),
	luclinBeardcolor: integer("luclin_beardcolor").default(1).notNull(),
	luclinBeard: integer("luclin_beard").default(0).notNull(),
	armortintId: integer("armortint_id").default(0).notNull(),
	armortintRed: integer("armortint_red").default(0).notNull(),
	armortintGreen: integer("armortint_green").default(0).notNull(),
	armortintBlue: integer("armortint_blue").default(0).notNull(),
	dMeleeTexture1: integer("d_melee_texture1").default(0).notNull(),
	dMeleeTexture2: integer("d_melee_texture2").default(0).notNull(),
	primMeleeType: integer("prim_melee_type").default(28).notNull(),
	secMeleeType: integer("sec_melee_type").default(28).notNull(),
	rangedType: integer("ranged_type").default(7).notNull(),
	runspeed: real("runspeed").default(0).notNull(),
	mr: integer("MR").default(0).notNull(),
	cr: integer("CR").default(0).notNull(),
	dr: integer("DR").default(0).notNull(),
	fr: integer("FR").default(0).notNull(),
	pr: integer("PR").default(0).notNull(),
	seeInvis: integer("see_invis").default(0).notNull(),
	seeInvisUndead: integer("see_invis_undead").default(0).notNull(),
	qglobal: integer("qglobal").default(0).notNull(),
	ac: integer("AC").default(0).notNull(),
	npcAggro: integer("npc_aggro").default(0).notNull(),
	spawnLimit: integer("spawn_limit").default(0).notNull(),
	attackDelay: integer("attack_delay").default(30).notNull(),
	str: integer("STR").default(75).notNull(),
	sta: integer("STA").default(75).notNull(),
	dex: integer("DEX").default(75).notNull(),
	agi: integer("AGI").default(75).notNull(),
	int: integer("_INT").default(80).notNull(),
	wis: integer("WIS").default(75).notNull(),
	cha: integer("CHA").default(75).notNull(),
	seeSneak: integer("see_sneak").default(0).notNull(),
	seeImprovedHide: integer("see_improved_hide").default(0).notNull(),
	atk: integer("ATK").default(0).notNull(),
	accuracy: integer("Accuracy").default(0).notNull(),
	slowMitigation: integer("slow_mitigation").default(0).notNull(),
	maxlevel: integer("maxlevel").default(0).notNull(),
	scalerate: integer("scalerate").default(100).notNull(),
	privateCorpse: integer("private_corpse").default(0).notNull(),
	uniqueSpawnByName: integer("unique_spawn_by_name").default(0).notNull(),
	underwater: integer("underwater").default(0).notNull(),
	isquest: integer("isquest").default(0).notNull(),
	emoteid: integer("emoteid").default(0).notNull(),
	spellscale: real("spellscale").default(100).notNull(),
	healscale: real("healscale").default(100).notNull(),
	raidTarget: integer("raid_target").default(0).notNull(),
	chesttexture: integer("chesttexture").default(0).notNull(),
	armtexture: integer("armtexture").default(0).notNull(),
	bracertexture: integer("bracertexture").default(0).notNull(),
	handtexture: integer("handtexture").default(0).notNull(),
	legtexture: integer("legtexture").default(0).notNull(),
	feettexture: integer("feettexture").default(0).notNull(),
	light: integer("light").default(0).notNull(),
	walkspeed: real("walkspeed").default(0).notNull(),
	combatHpRegen: integer("combat_hp_regen").default(0).notNull(),
	combatManaRegen: integer("combat_mana_regen").default(0).notNull(),
	aggroPc: integer("aggro_pc").default(0).notNull(),
	ignoreDistance: real("ignore_distance").default(600).notNull(),
	encounter: integer("encounter").default(0).notNull(),
	ignoreDespawn: integer("ignore_despawn").default(0).notNull(),
	avoidance: integer("avoidance").default(0).notNull(),
	expPct: integer("exp_pct").default(100).notNull(),
	greed: integer("greed").default(0).notNull(),
	engageNotice: integer("engage_notice").default(0).notNull(),
	stuckBehavior: integer("stuck_behavior").default(0).notNull(),
	flymode: integer("flymode").default(-1),
});
/*
export const npcTypesMetadata = sqliteTable("npc_types_metadata", {
	npcTypesId: integer("npc_types_id").default(0).primaryKey().notNull(),
	isPkMob: integer("isPKMob").default(0).notNull(),
	isNamedMob: integer("isNamedMob").default(0).notNull(),
	isRaidTarget: integer("isRaidTarget").default(0).notNull(),
	isCreatedMob: integer("isCreatedMob").default(0).notNull(),
	isCustomFeatureNpc: integer("isCustomFeatureNPC").default(0).notNull(),
});

export const npcTypesTint = sqliteTable("npc_types_tint", {
	id: integer("id").default(0).primaryKey().notNull(),
	tintSetName: text("tint_set_name").notNull(),
	red1H: integer("red1h").default(0).notNull(),
	grn1H: integer("grn1h").default(0).notNull(),
	blu1H: integer("blu1h").default(0).notNull(),
	red2C: integer("red2c").default(0).notNull(),
	grn2C: integer("grn2c").default(0).notNull(),
	blu2C: integer("blu2c").default(0).notNull(),
	red3A: integer("red3a").default(0).notNull(),
	grn3A: integer("grn3a").default(0).notNull(),
	blu3A: integer("blu3a").default(0).notNull(),
	red4B: integer("red4b").default(0).notNull(),
	grn4B: integer("grn4b").default(0).notNull(),
	blu4B: integer("blu4b").default(0).notNull(),
	red5G: integer("red5g").default(0).notNull(),
	grn5G: integer("grn5g").default(0).notNull(),
	blu5G: integer("blu5g").default(0).notNull(),
	red6L: integer("red6l").default(0).notNull(),
	grn6L: integer("grn6l").default(0).notNull(),
	blu6L: integer("blu6l").default(0).notNull(),
	red7F: integer("red7f").default(0).notNull(),
	grn7F: integer("grn7f").default(0).notNull(),
	blu7F: integer("blu7f").default(0).notNull(),
	red8X: integer("red8x").default(0).notNull(),
	grn8X: integer("grn8x").default(0).notNull(),
	blu8X: integer("blu8x").default(0).notNull(),
	red9X: integer("red9x").default(0).notNull(),
	grn9X: integer("grn9x").default(0).notNull(),
	blu9X: integer("blu9x").default(0).notNull(),
});

export const object = sqliteTable("object", {
	id: integer("id").primaryKey().notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	xpos: real("xpos").default(0).notNull(),
	ypos: real("ypos").default(0).notNull(),
	zpos: real("zpos").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	charges: integer("charges").default(0).notNull(),
	objectname: text("objectname"),
	type: integer("type").default(0).notNull(),
	icon: integer("icon").default(0).notNull(),
	size: integer("size").default(0).notNull(),
	solid: integer("solid").default(0).notNull(),
	incline: integer("incline").default(0).notNull(),
},
(table) => {
	return {
		zone: index("object_zone").on(table.zoneid),
	}
});

export const objectContents = sqliteTable("object_contents", {
	zoneid: integer("zoneid").default(0).notNull(),
	parentid: integer("parentid").default(0).notNull(),
	bagidx: integer("bagidx").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	charges: integer("charges").default(0).notNull(),
	droptime: text("droptime").default(0000-00-00 00:00:00).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.bagidx, table.parentid)
	}
});

export const petitions = sqliteTable("petitions", {
	dib: integer("dib").primaryKey().notNull(),
	petid: integer("petid").default(0).notNull(),
	charname: text("charname").default('').notNull(),
	accountname: text("accountname").default('').notNull(),
	lastgm: text("lastgm").default('').notNull(),
	petitiontext: text("petitiontext").notNull(),
	gmtext: text("gmtext"),
	zone: text("zone").default('').notNull(),
	urgency: integer("urgency").default(0).notNull(),
	charclass: integer("charclass").default(0).notNull(),
	charrace: integer("charrace").default(0).notNull(),
	charlevel: integer("charlevel").default(0).notNull(),
	checkouts: integer("checkouts").default(0).notNull(),
	unavailables: integer("unavailables").default(0).notNull(),
	ischeckedout: integer("ischeckedout").default(0).notNull(),
	senttime: integer("senttime").default(0).notNull(),
},
(table) => {
	return {
		petid: index("petitions_petid").on(table.petid),
	}
});

export const pets = sqliteTable("pets", {
	type: text("type").default('').notNull(),
	petpower: integer("petpower").default(0).notNull(),
	npcId: integer("npcID").default(0).notNull(),
	temp: integer("temp").default(0).notNull(),
	petcontrol: integer("petcontrol").default(0).notNull(),
	petnaming: integer("petnaming").default(0).notNull(),
	monsterflag: integer("monsterflag").default(0).notNull(),
	equipmentset: integer("equipmentset").default(-1).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.npcId, table.petpower, table.type)
	}
});

export const playerTitlesets = sqliteTable("player_titlesets", {
	id: integer("id").primaryKey().notNull(),
	charId: integer("char_id").notNull(),
	titleSet: integer("title_set").notNull(),
},
(table) => {
	return {
		id: index("player_titlesets_id").on(table.id),
	}
});

export const proximities = sqliteTable("proximities", {
	zoneid: integer("zoneid").default(0).notNull(),
	exploreid: integer("exploreid").default(0).notNull(),
	minx: real("minx").default(0.000000).notNull(),
	maxx: real("maxx").default(0.000000).notNull(),
	miny: real("miny").default(0.000000).notNull(),
	maxy: real("maxy").default(0.000000).notNull(),
	minz: real("minz").default(0.000000).notNull(),
	maxz: real("maxz").default(0.000000).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.exploreid, table.zoneid)
	}
});

export const qsMerchantTransactionLog = sqliteTable("qs_merchant_transaction_log", {
	charId: integer("char_id").default(0),
	charSlot: integer("char_slot").default(0),
	itemId: integer("item_id").default(0),
	charges: integer("charges").default(0),
	zoneId: integer("zone_id").default(0),
	merchantId: integer("merchant_id").default(0),
	merchantPp: integer("merchant_pp").default(0),
	merchantGp: integer("merchant_gp").default(0),
	merchantSp: integer("merchant_sp").default(0),
	merchantCp: integer("merchant_cp").default(0),
	merchantItems: integer("merchant_items").default(0),
	charPp: integer("char_pp").default(0),
	charGp: integer("char_gp").default(0),
	charSp: integer("char_sp").default(0),
	charCp: integer("char_cp").default(0),
	charItems: integer("char_items").default(0),
	time: text("time"),
});

export const qsPlayerAaPurchaseLog = sqliteTable("qs_player_aa_purchase_log", {
	charId: integer("char_id").default(0),
	aaType: text("aa_type").default(0),
	aaName: text("aa_name").default(0),
	aaId: integer("aa_id").default(0),
	aaCost: integer("aa_cost").default(0),
	zoneId: integer("zone_id").default(0),
	instanceId: integer("instance_id").default(0),
	time: text("time"),
});

export const qsPlayerAaRateHourly = sqliteTable("qs_player_aa_rate_hourly", {
	charId: integer("char_id").default(0).notNull(),
	hourTime: integer("hour_time").notNull(),
	aaCount: text("aa_count"),
},
(table) => {
	return {
		pk0: primaryKey(table.charId, table.hourTime)
	}
});

export const qsPlayerCoinMoveLog = sqliteTable("qs_player_coin_move_log", {
	time: text("time").default(0000-00-00 00:00:00).notNull(),
	fromChar: integer("from_char").default(0).notNull(),
	toChar: integer("to_char").default(0).notNull(),
	toNpc: integer("to_npc").default(0).notNull(),
	type: text("type").default('').notNull(),
	amount: integer("amount").default(0).notNull(),
	coinType: text("coin_type").default('').notNull(),
});

export const qsPlayerEvents = sqliteTable("qs_player_events", {
	id: integer("id").primaryKey().notNull(),
	charId: integer("char_id").default(0),
	event: integer("event").default(0),
	eventDesc: text("event_desc"),
	time: integer("time").default(0),
});

export const qsPlayerGroundSpawnsLog = sqliteTable("qs_player_ground_spawns_log", {
	time: text("time").default(0000-00-00 00:00:00).notNull(),
	characterid: integer("characterid").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	quantity: integer("quantity").default(0).notNull(),
	bagged: integer("bagged").default(0).notNull(),
	zone: integer("zone").default(0).notNull(),
	type: text("type").default('').notNull(),
});

export const qsPlayerHandinLog = sqliteTable("qs_player_handin_log", {
	charId: integer("char_id").default(0),
	charPp: integer("char_pp").default(0),
	charGp: integer("char_gp").default(0),
	charSp: integer("char_sp").default(0),
	charCp: integer("char_cp").default(0),
	charItems: integer("char_items").default(0),
	npcId: integer("npc_id").default(0),
	time: text("time"),
});

export const qsPlayerItemDeleteLog = sqliteTable("qs_player_item_delete_log", {
	charId: integer("char_id").default(0),
	charSlot: integer("char_slot").default(0),
	itemId: integer("item_id").default(0),
	charges: integer("charges").default(0),
	stackSize: integer("stack_size").default(0),
	charItems: integer("char_items").default(0),
	time: text("time"),
});

export const qsPlayerItemDesyncsLog = sqliteTable("qs_player_item_desyncs_log", {
	charId: integer("char_id").default(0),
	error: text("error"),
	time: text("time"),
	zoneId: integer("zone_id").default(0).notNull(),
});

export const qsPlayerItemMoveLog = sqliteTable("qs_player_item_move_log", {
	charId: integer("char_id").default(0),
	fromSlot: integer("from_slot").default(0),
	toSlot: integer("to_slot").default(0),
	itemId: integer("item_id").default(0),
	charges: integer("charges").default(0),
	stackSize: integer("stack_size").default(0),
	charItems: integer("char_items").default(0),
	postaction: integer("postaction").default(0),
	time: text("time"),
});

export const qsPlayerKilledByLog = sqliteTable("qs_player_killed_by_log", {
	charId: integer("char_id").default(0),
	zoneId: integer("zone_id").default(0),
	killedBy: text("killed_by"),
	spell: integer("spell").default(0),
	damage: integer("damage").default(0),
	time: text("time"),
	type: text("type").default(UNKNOWN),
});

export const qsPlayerLootRecordsLog = sqliteTable("qs_player_loot_records_log", {
	charId: integer("char_id").default(0),
	corpseName: text("corpse_name"),
	type: text("type"),
	zoneId: integer("zone_id").default(0),
	itemId: integer("item_id").default(0),
	itemName: text("item_name"),
	charges: integer("charges").default(0),
	platinum: integer("platinum").default(0),
	gold: integer("gold").default(0),
	silver: integer("silver").default(0),
	copper: integer("copper").default(0),
	time: text("time"),
});

export const qsPlayerNpcKillLog = sqliteTable("qs_player_npc_kill_log", {
	charId: integer("char_id").default(0),
	npcId: integer("npc_id"),
	type: integer("type"),
	aggroCharid: integer("aggro_charid").default(0).notNull(),
	zoneId: integer("zone_id"),
	time: text("time"),
});

export const qsPlayerQglobalUpdatesLog = sqliteTable("qs_player_qglobal_updates_log", {
	charId: integer("char_id").default(0),
	action: text("action"),
	zoneId: integer("zone_id").default(0),
	varname: text("varname"),
	newvalue: text("newvalue"),
	time: text("time"),
});

export const qsPlayerSpeech = sqliteTable("qs_player_speech", {
	id: integer("id").primaryKey().notNull(),
	from: text("from").notNull(),
	to: text("to").notNull(),
	message: text("message").notNull(),
	minstatus: integer("minstatus").notNull(),
	guilddbid: integer("guilddbid").notNull(),
	type: integer("type").notNull(),
	timerecorded: text("timerecorded").default(current_timestamp()).notNull(),
});

export const qsPlayerTradeItemsLog = sqliteTable("qs_player_trade_items_log", {
	fromId: integer("from_id").default(0),
	fromSlot: integer("from_slot").default(0),
	toId: integer("to_id").default(0),
	toSlot: integer("to_slot").default(0),
	itemId: integer("item_id").default(0),
	charges: integer("charges").default(0),
	bagged: integer("bagged").default(0).notNull(),
	type: text("type").default('').notNull(),
	time: text("time"),
});

export const qsPlayerTradeLog = sqliteTable("qs_player_trade_log", {
	char1Id: integer("char1_id").default(0),
	char1Pp: integer("char1_pp").default(0),
	char1Gp: integer("char1_gp").default(0),
	char1Sp: integer("char1_sp").default(0),
	char1Cp: integer("char1_cp").default(0),
	char1Items: integer("char1_items").default(0),
	char2Id: integer("char2_id").default(0),
	char2Pp: integer("char2_pp").default(0),
	char2Gp: integer("char2_gp").default(0),
	char2Sp: integer("char2_sp").default(0),
	char2Cp: integer("char2_cp").default(0),
	char2Items: integer("char2_items").default(0),
	time: text("time"),
});

export const qsPlayerTsEventLog = sqliteTable("qs_player_ts_event_log", {
	charId: integer("char_id").default(0),
	zoneId: integer("zone_id").default(0),
	results: text("results"),
	recipeId: integer("recipe_id").default(0),
	tradeskill: integer("tradeskill").default(0),
	trivial: integer("trivial").default(0),
	chance: real("chance").default(0),
	time: text("time"),
});

export const qsTraderAudit = sqliteTable("qs_trader_audit", {
	time: text("time").default(0000-00-00 00:00:00).notNull(),
	seller: text("seller").default('').notNull(),
	buyer: text("buyer").default('').notNull(),
	itemname: text("itemname").default('').notNull(),
	quantity: integer("quantity").default(0).notNull(),
	totalcost: integer("totalcost").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	serialnumber: integer("serialnumber").default(0).notNull(),
});

export const questGlobals = sqliteTable("quest_globals", {
	charid: integer("charid").default(0).notNull(),
	npcid: integer("npcid").default(0).notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	name: text("name").default('').notNull(),
	value: text("value").default(?).notNull(),
	expdate: integer("expdate"),
},
(table) => {
	return {
		qname: uniqueIndex("quest_globals_qname").on(table.name, table.charid, table.npcid, table.zoneid),
		pk0: primaryKey(table.charid, table.name, table.npcid, table.zoneid)
	}
});
*/
export const races = sqliteTable("races", {
	name: text("name").default('').primaryKey().notNull(),
	id: integer("id").default(0).notNull(),
	noCoin: integer("no_coin").default(0).notNull(),
},
(table) => {
	return {
		id: index("races_id").on(table.id),
	}
});
/*
export const raidDetails = sqliteTable("raid_details", {
	raidid: integer("raidid").default(0).primaryKey().notNull(),
	loottype: integer("loottype").default(0).notNull(),
	locked: integer("locked").default(0).notNull(),
});

export const raidMembers = sqliteTable("raid_members", {
	raidid: integer("raidid").default(0).notNull(),
	charid: integer("charid").default(0).primaryKey().notNull(),
	groupid: integer("groupid").default(0).notNull(),
	class: integer("_class").default(0).notNull(),
	level: integer("level").default(0).notNull(),
	name: text("name").default('').notNull(),
	isgroupleader: integer("isgroupleader").default(0).notNull(),
	israidleader: integer("israidleader").default(0).notNull(),
	islooter: integer("islooter").default(0).notNull(),
});

export const reports = sqliteTable("reports", {
	id: integer("id").primaryKey().notNull(),
	name: text("name"),
	reported: text("reported"),
	reportedText: text("reported_text"),
},
(table) => {
	return {
		id: uniqueIndex("reports_id").on(table.id),
	}
});

export const respawnTimes = sqliteTable("respawn_times", {
	id: integer("id").default(0).primaryKey().notNull(),
	start: integer("start").default(0).notNull(),
	duration: integer("duration").default(0).notNull(),
});

export const ruleSets = sqliteTable("rule_sets", {
	rulesetId: integer("ruleset_id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
});

export const ruleValues = sqliteTable("rule_values", {
	rulesetId: integer("ruleset_id").default(0).notNull(),
	ruleName: text("rule_name").default('').notNull(),
	ruleValue: text("rule_value").default('').notNull(),
	notes: text("notes").notNull(),
},
(table) => {
	return {
		rulesetId: index("rule_values_ruleset_id").on(table.rulesetId),
		pk0: primaryKey(table.ruleName, table.rulesetId)
	}
});

export const saylink = sqliteTable("saylink", {
	id: integer("id").primaryKey().notNull(),
	phrase: text("phrase").default('').notNull(),
});

export const skillCaps = sqliteTable("skill_caps", {
	skillId: integer("skillID").default(0).notNull(),
	class: integer("class").default(0).notNull(),
	level: integer("level").default(0).notNull(),
	cap: integer("cap").default(0).notNull(),
	class: integer("class_").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.class, table.class, table.level, table.skillId)
	}
});

export const skillDifficulty = sqliteTable("skill_difficulty", {
	skillid: integer("skillid").default(0).notNull(),
	difficulty: real("difficulty").default(0).notNull(),
	name: text("name").notNull(),
});

export const spawn2 = sqliteTable("spawn2", {
	id: integer("id").primaryKey().notNull(),
	spawngroupId: integer("spawngroupID").default(0).notNull(),
	zone: text("zone"),
	x: real("x").default(0.000000).notNull(),
	y: real("y").default(0.000000).notNull(),
	z: real("z").default(0.000000).notNull(),
	heading: real("heading").default(0.000000).notNull(),
	respawntime: integer("respawntime").default(0).notNull(),
	variance: integer("variance").default(0).notNull(),
	pathgrid: integer("pathgrid").default(0).notNull(),
	condition: integer("_condition").default(0).notNull(),
	condValue: integer("cond_value").default(1).notNull(),
	enabled: integer("enabled").default(1).notNull(),
	animation: integer("animation").default(0).notNull(),
	bootRespawntime: integer("boot_respawntime").default(0).notNull(),
	clearTimerOnboot: integer("clear_timer_onboot").default(0).notNull(),
	bootVariance: integer("boot_variance").default(0).notNull(),
	forceZ: integer("force_z").default(0).notNull(),
},
(table) => {
	return {
		zoneGroup: index("spawn2_ZoneGroup").on(table.zone),
		spawngroupId: index("spawn2_spawngroupID").on(table.spawngroupId),
	}
});

export const spawnentry = sqliteTable("spawnentry", {
	spawngroupId: integer("spawngroupID").default(0).notNull(),
	npcId: integer("npcID").default(0).notNull(),
	chance: integer("chance").default(0).notNull(),
	mintime: integer("mintime").default(0).notNull(),
	maxtime: integer("maxtime").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.npcId, table.spawngroupId)
	}
});

export const spawngroup = sqliteTable("spawngroup", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	spawnLimit: integer("spawn_limit").default(0).notNull(),
	maxX: real("max_x").default(0).notNull(),
	minX: real("min_x").default(0).notNull(),
	maxY: real("max_y").default(0).notNull(),
	minY: real("min_y").default(0).notNull(),
	delay: integer("delay").default(45000).notNull(),
	mindelay: integer("mindelay").default(15000).notNull(),
	despawn: integer("despawn").default(0).notNull(),
	despawnTimer: integer("despawn_timer").default(100).notNull(),
	randSpawns: integer("rand_spawns").default(0).notNull(),
	randRespawntime: integer("rand_respawntime").default(1200).notNull(),
	randVariance: integer("rand_variance").default(0).notNull(),
	randCondition: integer("rand_condition_").default(0).notNull(),
	wpSpawns: integer("wp_spawns").default(0).notNull(),
},
(table) => {
	return {
		name: uniqueIndex("spawngroup_name").on(table.name),
	}
});

export const spawnConditions = sqliteTable("spawn_conditions", {
	zone: text("zone").default('').notNull(),
	id: integer("id").default(1).notNull(),
	value: integer("value").default(0).notNull(),
	onchange: integer("onchange").default(0).notNull(),
	name: text("name").default('').notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.zone)
	}
});

export const spawnConditionValues = sqliteTable("spawn_condition_values", {
	id: integer("id").notNull(),
	value: integer("value"),
	zone: text("zone").notNull(),
},
(table) => {
	return {
		zoneinstance: index("spawn_condition_values_zoneinstance").on(table.zone),
		instance: uniqueIndex("spawn_condition_values_instance").on(table.id, table.zone),
	}
});

export const spawnEvents = sqliteTable("spawn_events", {
	id: integer("id").primaryKey().notNull(),
	zone: text("zone"),
	condId: integer("cond_id").default(0).notNull(),
	name: text("name").default('').notNull(),
	period: integer("period").default(0).notNull(),
	nextMinute: integer("next_minute").default(0).notNull(),
	nextHour: integer("next_hour").default(0).notNull(),
	nextDay: integer("next_day").default(0).notNull(),
	nextMonth: integer("next_month").default(0).notNull(),
	nextYear: integer("next_year").default(0).notNull(),
	enabled: integer("enabled").default(1).notNull(),
	action: integer("action").default(0).notNull(),
	argument: integer("argument").default(0).notNull(),
	strict: integer("strict").default(0).notNull(),
});

export const spellsEn = sqliteTable("spells_en", {
	id: integer("id").default(0).primaryKey().notNull(),
	name: text("name"),
	player1: text("player_1").default(BLUE_TRAIL),
	teleportZone: text("teleport_zone"),
	youCast: text("you_cast"),
	otherCasts: text("other_casts"),
	castOnYou: text("cast_on_you"),
	castOnOther: text("cast_on_other"),
	spellFades: text("spell_fades"),
	range: integer("range"),
	aoerange: integer("aoerange"),
	pushback: real("pushback").default(0.00).notNull(),
	pushup: real("pushup").default(0.00).notNull(),
	castTime: integer("cast_time"),
	recoveryTime: integer("recovery_time"),
	recastTime: integer("recast_time"),
	buffdurationformula: integer("buffdurationformula").default(7).notNull(),
	buffduration: integer("buffduration"),
	aeDuration: integer("AEDuration").default(0).notNull(),
	mana: integer("mana"),
	effectBaseValue1: integer("effect_base_value1").default(100),
	effectBaseValue2: integer("effect_base_value2"),
	effectBaseValue3: real("effect_base_value3").default(0.00).notNull(),
	effectBaseValue4: integer("effect_base_value4").default(0).notNull(),
	effectBaseValue5: integer("effect_base_value5").default(0).notNull(),
	effectBaseValue6: integer("effect_base_value6").default(0).notNull(),
	effectBaseValue7: integer("effect_base_value7").default(0).notNull(),
	effectBaseValue8: integer("effect_base_value8").default(0).notNull(),
	effectBaseValue9: integer("effect_base_value9").default(0).notNull(),
	effectBaseValue10: integer("effect_base_value10").default(0).notNull(),
	effectBaseValue11: integer("effect_base_value11").default(0).notNull(),
	effectBaseValue12: integer("effect_base_value12").default(0).notNull(),
	effectLimitValue1: integer("effect_limit_value1"),
	effectLimitValue2: integer("effect_limit_value2"),
	effectLimitValue3: integer("effect_limit_value3").default(0).notNull(),
	effectLimitValue4: integer("effect_limit_value4").default(0).notNull(),
	effectLimitValue5: integer("effect_limit_value5").default(0).notNull(),
	effectLimitValue6: integer("effect_limit_value6").default(0).notNull(),
	effectLimitValue7: integer("effect_limit_value7").default(0).notNull(),
	effectLimitValue8: integer("effect_limit_value8").default(0).notNull(),
	effectLimitValue9: integer("effect_limit_value9").default(0).notNull(),
	effectLimitValue10: integer("effect_limit_value10").default(0).notNull(),
	effectLimitValue11: integer("effect_limit_value11").default(0).notNull(),
	effectLimitValue12: integer("effect_limit_value12").default(0).notNull(),
	icon: integer("icon").default(0).notNull(),
	memicon: integer("memicon").default(0).notNull(),
	components1: integer("components1").default(-1).notNull(),
	components2: integer("components2").default(-1).notNull(),
	components3: integer("components3").default(-1).notNull(),
	components4: integer("components4").default(-1).notNull(),
	componentCounts1: integer("component_counts1").default(1).notNull(),
	componentCounts2: integer("component_counts2").default(1).notNull(),
	componentCounts3: integer("component_counts3").default(1).notNull(),
	componentCounts4: integer("component_counts4").default(1).notNull(),
	noexpendReagent1: integer("NoexpendReagent1").default(-1).notNull(),
	noexpendReagent2: integer("NoexpendReagent2").default(-1).notNull(),
	noexpendReagent3: integer("NoexpendReagent3").default(-1).notNull(),
	noexpendReagent4: integer("NoexpendReagent4").default(-1).notNull(),
	formula1: integer("formula1").default(100).notNull(),
	formula2: integer("formula2"),
	formula3: integer("formula3"),
	formula4: integer("formula4"),
	formula5: integer("formula5").default(100).notNull(),
	formula6: integer("formula6").default(100).notNull(),
	formula7: integer("formula7").default(100).notNull(),
	formula8: integer("formula8").default(100).notNull(),
	formula9: integer("formula9").default(100).notNull(),
	formula10: integer("formula10").default(100).notNull(),
	formula11: integer("formula11").default(100).notNull(),
	formula12: integer("formula12").default(100).notNull(),
	lightType: integer("LightType").default(0).notNull(),
	goodEffect: integer("goodEffect").default(0).notNull(),
	activated: integer("Activated"),
	resisttype: integer("resisttype").default(0).notNull(),
	effectid1: integer("effectid1").default(254).notNull(),
	effectid2: integer("effectid2").default(254).notNull(),
	effectid3: integer("effectid3").default(254).notNull(),
	effectid4: integer("effectid4").default(254).notNull(),
	effectid5: integer("effectid5").default(254).notNull(),
	effectid6: integer("effectid6").default(254).notNull(),
	effectid7: integer("effectid7").default(254).notNull(),
	effectid8: integer("effectid8").default(254).notNull(),
	effectid9: integer("effectid9").default(254).notNull(),
	effectid10: integer("effectid10").default(254).notNull(),
	effectid11: integer("effectid11").default(254).notNull(),
	effectid12: integer("effectid12").default(254).notNull(),
	targettype: integer("targettype").default(2).notNull(),
	basediff: integer("basediff").default(0).notNull(),
	skill: integer("skill").default(98).notNull(),
	zonetype: integer("zonetype").default(-1).notNull(),
	environmentType: integer("EnvironmentType").default(0).notNull(),
	timeOfDay: integer("TimeOfDay").default(0).notNull(),
	classes1: integer("classes1").default(255).notNull(),
	classes2: integer("classes2").default(255).notNull(),
	classes3: integer("classes3").default(255).notNull(),
	classes4: integer("classes4").default(255).notNull(),
	classes5: integer("classes5").default(255).notNull(),
	classes6: integer("classes6").default(255).notNull(),
	classes7: integer("classes7").default(255).notNull(),
	classes8: integer("classes8").default(255).notNull(),
	classes9: integer("classes9").default(255).notNull(),
	classes10: integer("classes10").default(255).notNull(),
	classes11: integer("classes11").default(255).notNull(),
	classes12: integer("classes12").default(255).notNull(),
	classes13: integer("classes13").default(255).notNull(),
	classes14: integer("classes14").default(255).notNull(),
	classes15: integer("classes15").default(255).notNull(),
	castingAnim: integer("CastingAnim"),
	targetAnim: integer("TargetAnim"),
	travelType: integer("TravelType").default(0).notNull(),
	spellAffectIndex: integer("SpellAffectIndex").default(-1).notNull(),
	disallowSit: integer("disallow_sit"),
	deities0: integer("deities0").default(0).notNull(),
	deities1: integer("deities1").default(0).notNull(),
	deities2: integer("deities2").default(0).notNull(),
	deities3: integer("deities3").default(0).notNull(),
	deities4: integer("deities4").default(0).notNull(),
	deities5: integer("deities5").default(0).notNull(),
	deities6: integer("deities6").default(0).notNull(),
	deities7: integer("deities7").default(0).notNull(),
	deities8: integer("deities8").default(0).notNull(),
	deities9: integer("deities9").default(0).notNull(),
	deities10: integer("deities10").default(0).notNull(),
	deities11: integer("deities11").default(0).notNull(),
	deities12: integer("deities12").default(0).notNull(),
	deities13: integer("deities13").default(0).notNull(),
	deities14: integer("deities14").default(0).notNull(),
	deities15: integer("deities15").default(0).notNull(),
	deities16: integer("deities16").default(0).notNull(),
	npcNoCast: integer("npc_no_cast").default(0).notNull(),
	aiPtBonus: integer("ai_pt_bonus").default(0).notNull(),
	newIcon: integer("new_icon").default(161).notNull(),
	spellanim: integer("spellanim").default(0).notNull(),
	uninterruptable: integer("uninterruptable").default(0).notNull(),
	resistDiff: integer("ResistDiff"),
	dotStackingExempt: integer("dot_stacking_exempt").default(0).notNull(),
	deleteable: integer("deleteable").default(0).notNull(),
	recourseLink: integer("RecourseLink").default(0).notNull(),
	noPartialResist: integer("no_partial_resist").default(0).notNull(),
	smallTargetsOnly: integer("small_targets_only").default(0).notNull(),
	usePersistentParticles: integer("use_persistent_particles").default(0).notNull(),
	shortBuffBox: integer("short_buff_box").default(-1).notNull(),
	descnum: integer("descnum"),
	typedescnum: integer("typedescnum"),
	effectdescnum: integer("effectdescnum"),
	effectdescnum2: integer("effectdescnum2"),
	npcNoLos: integer("npc_no_los").default(0).notNull(),
});
*/
export const spellsNew = sqliteTable("spells_new", {
	id: integer("id").default(0).primaryKey().notNull(),
	name: text("name"),
	player1: text("player_1").default("BLUE_TRAIL"),
	teleportZone: text("teleport_zone"),
	youCast: text("you_cast"),
	otherCasts: text("other_casts"),
	castOnYou: text("cast_on_you"),
	castOnOther: text("cast_on_other"),
	spellFades: text("spell_fades"),
	range: integer("range").default(100).notNull(),
	aoerange: integer("aoerange").default(0).notNull(),
	pushback: real("pushback").default(0.00).notNull(),
	pushup: real("pushup").default(0.00).notNull(),
	castTime: integer("cast_time").default(0).notNull(),
	recoveryTime: integer("recovery_time").default(0).notNull(),
	recastTime: integer("recast_time").default(0).notNull(),
	buffdurationformula: integer("buffdurationformula").default(7).notNull(),
	buffduration: integer("buffduration").default(65).notNull(),
	aeDuration: integer("AEDuration").default(0).notNull(),
	mana: integer("mana").default(0).notNull(),
	effectBaseValue1: integer("effect_base_value1").default(100).notNull(),
	effectBaseValue2: integer("effect_base_value2").default(0).notNull(),
	effectBaseValue3: integer("effect_base_value3").default(0).notNull(),
	effectBaseValue4: integer("effect_base_value4").default(0).notNull(),
	effectBaseValue5: integer("effect_base_value5").default(0).notNull(),
	effectBaseValue6: integer("effect_base_value6").default(0).notNull(),
	effectBaseValue7: integer("effect_base_value7").default(0).notNull(),
	effectBaseValue8: integer("effect_base_value8").default(0).notNull(),
	effectBaseValue9: integer("effect_base_value9").default(0).notNull(),
	effectBaseValue10: integer("effect_base_value10").default(0).notNull(),
	effectBaseValue11: integer("effect_base_value11").default(0).notNull(),
	effectBaseValue12: integer("effect_base_value12").default(0).notNull(),
	effectLimitValue1: integer("effect_limit_value1").default(0).notNull(),
	effectLimitValue2: integer("effect_limit_value2").default(0).notNull(),
	effectLimitValue3: integer("effect_limit_value3").default(0).notNull(),
	effectLimitValue4: integer("effect_limit_value4").default(0).notNull(),
	effectLimitValue5: integer("effect_limit_value5").default(0).notNull(),
	effectLimitValue6: integer("effect_limit_value6").default(0).notNull(),
	effectLimitValue7: integer("effect_limit_value7").default(0).notNull(),
	effectLimitValue8: integer("effect_limit_value8").default(0).notNull(),
	effectLimitValue9: integer("effect_limit_value9").default(0).notNull(),
	effectLimitValue10: integer("effect_limit_value10").default(0).notNull(),
	effectLimitValue11: integer("effect_limit_value11").default(0).notNull(),
	effectLimitValue12: integer("effect_limit_value12").default(0).notNull(),
	max1: integer("max1").default(0).notNull(),
	max2: integer("max2").default(0).notNull(),
	max3: integer("max3").default(0).notNull(),
	max4: integer("max4").default(0).notNull(),
	max5: integer("max5").default(0).notNull(),
	max6: integer("max6").default(0).notNull(),
	max7: integer("max7").default(0).notNull(),
	max8: integer("max8").default(0).notNull(),
	max9: integer("max9").default(0).notNull(),
	max10: integer("max10").default(0).notNull(),
	max11: integer("max11").default(0).notNull(),
	max12: integer("max12").default(0).notNull(),
	icon: integer("icon").default(0).notNull(),
	memicon: integer("memicon").default(0).notNull(),
	components1: integer("components1").default(-1).notNull(),
	components2: integer("components2").default(-1).notNull(),
	components3: integer("components3").default(-1).notNull(),
	components4: integer("components4").default(-1).notNull(),
	componentCounts1: integer("component_counts1").default(1).notNull(),
	componentCounts2: integer("component_counts2").default(1).notNull(),
	componentCounts3: integer("component_counts3").default(1).notNull(),
	componentCounts4: integer("component_counts4").default(1).notNull(),
	noexpendReagent1: integer("NoexpendReagent1").default(-1).notNull(),
	noexpendReagent2: integer("NoexpendReagent2").default(-1).notNull(),
	noexpendReagent3: integer("NoexpendReagent3").default(-1).notNull(),
	noexpendReagent4: integer("NoexpendReagent4").default(-1).notNull(),
	formula1: integer("formula1").default(100).notNull(),
	formula2: integer("formula2").default(100).notNull(),
	formula3: integer("formula3").default(100).notNull(),
	formula4: integer("formula4").default(100).notNull(),
	formula5: integer("formula5").default(100).notNull(),
	formula6: integer("formula6").default(100).notNull(),
	formula7: integer("formula7").default(100).notNull(),
	formula8: integer("formula8").default(100).notNull(),
	formula9: integer("formula9").default(100).notNull(),
	formula10: integer("formula10").default(100).notNull(),
	formula11: integer("formula11").default(100).notNull(),
	formula12: integer("formula12").default(100).notNull(),
	lightType: integer("LightType").default(0).notNull(),
	goodEffect: integer("goodEffect").default(0).notNull(),
	activated: integer("Activated").default(0).notNull(),
	resisttype: integer("resisttype").default(0).notNull(),
	effectid1: integer("effectid1").default(254).notNull(),
	effectid2: integer("effectid2").default(254).notNull(),
	effectid3: integer("effectid3").default(254).notNull(),
	effectid4: integer("effectid4").default(254).notNull(),
	effectid5: integer("effectid5").default(254).notNull(),
	effectid6: integer("effectid6").default(254).notNull(),
	effectid7: integer("effectid7").default(254).notNull(),
	effectid8: integer("effectid8").default(254).notNull(),
	effectid9: integer("effectid9").default(254).notNull(),
	effectid10: integer("effectid10").default(254).notNull(),
	effectid11: integer("effectid11").default(254).notNull(),
	effectid12: integer("effectid12").default(254).notNull(),
	targettype: integer("targettype").default(2).notNull(),
	basediff: integer("basediff").default(0).notNull(),
	skill: integer("skill").default(98).notNull(),
	zonetype: integer("zonetype").default(-1).notNull(),
	environmentType: integer("EnvironmentType").default(0).notNull(),
	timeOfDay: integer("TimeOfDay").default(0).notNull(),
	classes1: integer("classes1").default(255).notNull(),
	classes2: integer("classes2").default(255).notNull(),
	classes3: integer("classes3").default(255).notNull(),
	classes4: integer("classes4").default(255).notNull(),
	classes5: integer("classes5").default(255).notNull(),
	classes6: integer("classes6").default(255).notNull(),
	classes7: integer("classes7").default(255).notNull(),
	classes8: integer("classes8").default(255).notNull(),
	classes9: integer("classes9").default(255).notNull(),
	classes10: integer("classes10").default(255).notNull(),
	classes11: integer("classes11").default(255).notNull(),
	classes12: integer("classes12").default(255).notNull(),
	classes13: integer("classes13").default(255).notNull(),
	classes14: integer("classes14").default(255).notNull(),
	classes15: integer("classes15").default(255).notNull(),
	castingAnim: integer("CastingAnim").default(44).notNull(),
	targetAnim: integer("TargetAnim").default(13).notNull(),
	travelType: integer("TravelType").default(0).notNull(),
	spellAffectIndex: integer("SpellAffectIndex").default(-1).notNull(),
	disallowSit: integer("disallow_sit").default(0).notNull(),
	deities0: integer("deities0").default(0).notNull(),
	deities1: integer("deities1").default(0).notNull(),
	deities2: integer("deities2").default(0).notNull(),
	deities3: integer("deities3").default(0).notNull(),
	deities4: integer("deities4").default(0).notNull(),
	deities5: integer("deities5").default(0).notNull(),
	deities6: integer("deities6").default(0).notNull(),
	deities7: integer("deities7").default(0).notNull(),
	deities8: integer("deities8").default(0).notNull(),
	deities9: integer("deities9").default(0).notNull(),
	deities10: integer("deities10").default(0).notNull(),
	deities11: integer("deities11").default(0).notNull(),
	deities12: integer("deities12").default(0).notNull(),
	deities13: integer("deities13").default(0).notNull(),
	deities14: integer("deities14").default(0).notNull(),
	deities15: integer("deities15").default(0).notNull(),
	deities16: integer("deities16").default(0).notNull(),
	npcNoCast: integer("npc_no_cast").default(0).notNull(),
	aiPtBonus: integer("ai_pt_bonus").default(0).notNull(),
	newIcon: integer("new_icon").default(161).notNull(),
	spellanim: integer("spellanim").default(0).notNull(),
	uninterruptable: integer("uninterruptable").default(0).notNull(),
	resistDiff: integer("ResistDiff").default(-150).notNull(),
	dotStackingExempt: integer("dot_stacking_exempt").default(0).notNull(),
	deleteable: integer("deleteable").default(0).notNull(),
	recourseLink: integer("RecourseLink").default(0).notNull(),
	noPartialResist: integer("no_partial_resist").default(0).notNull(),
	smallTargetsOnly: integer("small_targets_only").default(0).notNull(),
	usePersistentParticles: integer("use_persistent_particles").default(0).notNull(),
	shortBuffBox: integer("short_buff_box").default(-1).notNull(),
	descnum: integer("descnum").default(0).notNull(),
	typedescnum: integer("typedescnum"),
	effectdescnum: integer("effectdescnum"),
	effectdescnum2: integer("effectdescnum2").default(0).notNull(),
	npcNoLos: integer("npc_no_los").default(0).notNull(),
	reflectable: integer("reflectable").default(0).notNull(),
	resistPerLevel: integer("resist_per_level").default(0).notNull(),
	resistCap: integer("resist_cap").default(0).notNull(),
	endurCost: integer("EndurCost").default(0).notNull(),
	endurTimerIndex: integer("EndurTimerIndex").default(0).notNull(),
	isDiscipline: integer("IsDiscipline").default(0).notNull(),
	hateAdded: integer("HateAdded").default(0).notNull(),
	endurUpkeep: integer("EndurUpkeep").default(0).notNull(),
	pvpresistbase: integer("pvpresistbase").default(-150).notNull(),
	pvpresistcalc: integer("pvpresistcalc").default(100).notNull(),
	pvpresistcap: integer("pvpresistcap").default(-150).notNull(),
	spellCategory: integer("spell_category").default(-99).notNull(),
	pvpDuration: integer("pvp_duration").default(0).notNull(),
	pvpDurationCap: integer("pvp_duration_cap").default(0).notNull(),
	castNotStanding: integer("cast_not_standing").default(0).notNull(),
	canMgb: integer("can_mgb").default(0).notNull(),
	nodispell: integer("nodispell").default(-1).notNull(),
	npcCategory: integer("npc_category").default(0).notNull(),
	npcUsefulness: integer("npc_usefulness").default(0).notNull(),
	wearOffMessage: integer("wear_off_message").default(0).notNull(),
	suspendable: integer("suspendable").default(0),
	spellgroup: integer("spellgroup").default(0),
	allowSpellscribe: integer("allow_spellscribe").default(0).notNull(),
	allowrest: integer("allowrest").default(0),
	customIcon: integer("custom_icon").default(0),
	notPlayerSpell: integer("not_player_spell").default(0),
	disabled: integer("disabled").default(0).notNull(),
});
/*
export const spellGlobals = sqliteTable("spell_globals", {
	spellid: integer("spellid").primaryKey().notNull(),
	spellName: text("spell_name").default('').notNull(),
	qglobal: text("qglobal").default('').notNull(),
	value: text("value").default('').notNull(),
});

export const startingItems = sqliteTable("starting_items", {
	id: integer("id").notNull(),
	race: integer("race").default(0).notNull(),
	class: integer("class").default(0).notNull(),
	deityid: integer("deityid").default(0).notNull(),
	zoneid: integer("zoneid").default(0).notNull(),
	itemid: integer("itemid").default(0).notNull(),
	itemCharges: integer("item_charges").default(1).notNull(),
	gm: integer("gm").default(0).notNull(),
	slot: integer("slot").default(-1).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.id, table.race)
	}
});

export const startZones = sqliteTable("start_zones", {
	x: real("x").default(0).notNull(),
	y: real("y").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	zoneId: integer("zone_id").default(0).notNull(),
	bindId: integer("bind_id").default(0).notNull(),
	playerChoice: integer("player_choice").default(0).notNull(),
	playerClass: integer("player_class").default(0).notNull(),
	playerDeity: integer("player_deity").default(0).notNull(),
	playerRace: integer("player_race").default(0).notNull(),
	startZone: integer("start_zone").default(0).notNull(),
	bindX: real("bind_x").default(0).notNull(),
	bindY: real("bind_y").default(0).notNull(),
	bindZ: real("bind_z").default(0).notNull(),
	selectRank: integer("select_rank").default(50).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.playerChoice, table.playerClass, table.playerDeity, table.playerRace)
	}
});

export const tblaccountaccesslog = sqliteTable("tblaccountaccesslog", {
	id: integer("id").primaryKey().notNull(),
	accountId: integer("account_id").notNull(),
	accountName: text("account_name").notNull(),
	ip: text("IP").notNull(),
	accessed: integer("accessed").notNull(),
	sqlTime: text("SQL_Time").default(current_timestamp()).notNull(),
	reason: text("reason"),
});

export const tblloginserveraccounts = sqliteTable("tblloginserveraccounts", {
	loginServerId: integer("LoginServerID").notNull(),
	accountName: text("AccountName").notNull(),
	accountPassword: text("AccountPassword").notNull(),
	accountCreateDate: text("AccountCreateDate").default(current_timestamp()).notNull(),
	accountEmail: text("AccountEmail").default(0).notNull(),
	lastLoginDate: text("LastLoginDate").notNull(),
	lastIpAddress: text("LastIPAddress").notNull(),
	createdBy: integer("created_by").default(1).notNull(),
	clientUnlock: integer("client_unlock").default(0).notNull(),
	creationIp: text("creationIP").notNull(),
	forumName: text("ForumName").notNull(),
	maxAccts: integer("max_accts").default(0).notNull(),
	numIpBypass: integer("Num_IP_Bypass").default(0),
	lastpassChange: integer("lastpass_change"),
},
(table) => {
	return {
		pk0: primaryKey(table.accountName, table.loginServerId)
	}
});

export const tblserveradminregistration = sqliteTable("tblserveradminregistration", {
	serverAdminId: integer("ServerAdminID").notNull(),
	accountName: text("AccountName").notNull(),
	accountPassword: text("AccountPassword").notNull(),
	firstName: text("FirstName").notNull(),
	lastName: text("LastName").notNull(),
	email: text("Email").default('').notNull(),
	registrationDate: text("RegistrationDate").notNull(),
	registrationIpAddr: text("RegistrationIPAddr").notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.email, table.serverAdminId)
	}
});

export const tblserverlisttype = sqliteTable("tblserverlisttype", {
	serverListTypeId: integer("ServerListTypeID").primaryKey().notNull(),
	serverListTypeDescription: text("ServerListTypeDescription").notNull(),
});

export const tblworldserverregistration = sqliteTable("tblworldserverregistration", {
	serverId: integer("ServerID").notNull(),
	serverLongName: text("ServerLongName").notNull(),
	serverTagDescription: text("ServerTagDescription").default('').notNull(),
	serverShortName: text("ServerShortName").notNull(),
	serverListTypeId: integer("ServerListTypeID").notNull(),
	serverLastLoginDate: text("ServerLastLoginDate"),
	serverLastIpAddr: text("ServerLastIPAddr"),
	serverAdminId: integer("ServerAdminID").notNull(),
	serverTrusted: integer("ServerTrusted").notNull(),
	note: text("Note"),
},
(table) => {
	return {
		pk0: primaryKey(table.serverId, table.serverLongName)
	}
});

export const titles = sqliteTable("titles", {
	id: integer("id").primaryKey().notNull(),
	skillId: integer("skill_id").default(-1).notNull(),
	minSkillValue: integer("min_skill_value").default(-1).notNull(),
	maxSkillValue: integer("max_skill_value").default(-1).notNull(),
	minAaPoints: integer("min_aa_points").default(-1).notNull(),
	maxAaPoints: integer("max_aa_points").default(-1).notNull(),
	class: integer("class").default(-1).notNull(),
	gender: integer("gender").default(-1).notNull(),
	charId: integer("char_id").default(-1).notNull(),
	status: integer("status").default(-1).notNull(),
	itemId: integer("item_id").default(-1).notNull(),
	prefix: text("prefix").default('').notNull(),
	suffix: text("suffix").default('').notNull(),
	titleSet: integer("title_set").default(0).notNull(),
});

export const trader = sqliteTable("trader", {
	charId: integer("char_id").default(0).notNull(),
	itemId: integer("item_id").default(0).notNull(),
	iSlotid: integer("i_slotid").default(0).notNull(),
	charges: integer("charges").default(0).notNull(),
	itemCost: integer("item_cost").default(0).notNull(),
	slotId: integer("slot_id").default(0).notNull(),
},
(table) => {
	return {
		pk0: primaryKey(table.charId, table.slotId)
	}
});

export const tradeskillRecipe = sqliteTable("tradeskill_recipe", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").default('').notNull(),
	tradeskill: integer("tradeskill").default(0).notNull(),
	skillneeded: integer("skillneeded").default(0).notNull(),
	trivial: integer("trivial").default(0).notNull(),
	nofail: integer("nofail").default(0).notNull(),
	replaceContainer: integer("replace_container").default(0).notNull(),
	notes: text("notes"),
	quest: integer("quest").default(0).notNull(),
	enabled: integer("enabled").default(1).notNull(),
});

export const tradeskillRecipeEntries = sqliteTable("tradeskill_recipe_entries", {
	id: integer("id").primaryKey().notNull(),
	recipeId: integer("recipe_id").default(0).notNull(),
	itemId: integer("item_id").default(0).notNull(),
	successcount: integer("successcount").default(0).notNull(),
	failcount: integer("failcount").default(0).notNull(),
	componentcount: integer("componentcount").default(1).notNull(),
	iscontainer: integer("iscontainer").default(0).notNull(),
},
(table) => {
	return {
		recipeId: index("tradeskill_recipe_entries_recipe_id").on(table.recipeId),
		itemId: index("tradeskill_recipe_entries_item_id").on(table.itemId),
	}
});

export const traps = sqliteTable("traps", {
	id: integer("id").primaryKey().notNull(),
	zone: text("zone").default('').notNull(),
	x: integer("x").default(0).notNull(),
	y: integer("y").default(0).notNull(),
	z: integer("z").default(0).notNull(),
	chance: integer("chance").default(0).notNull(),
	maxzdiff: real("maxzdiff").default(0).notNull(),
	radius: real("radius").default(0).notNull(),
	effect: integer("effect").default(0).notNull(),
	effectvalue: integer("effectvalue").default(0).notNull(),
	effectvalue2: integer("effectvalue2").default(0).notNull(),
	message: text("message").default('').notNull(),
	skill: integer("skill").default(0).notNull(),
	level: integer("level").default(1).notNull(),
	respawnTime: integer("respawn_time").default(60).notNull(),
	respawnVar: integer("respawn_var").default(0).notNull(),
	triggeredNumber: integer("triggered_number").default(0).notNull(),
	group: integer("group").default(0).notNull(),
	despawnWhenTriggered: integer("despawn_when_triggered").default(0).notNull(),
	undetectable: integer("undetectable").default(0).notNull(),
},
(table) => {
	return {
		zone: index("traps_zone").on(table.zone),
	}
});

export const variables = sqliteTable("variables", {
	varname: text("varname").default('').primaryKey().notNull(),
	value: text("value").notNull(),
	information: text("information").notNull(),
	ts: text("ts").default(current_timestamp()).notNull(),
});

export const webdataCharacter = sqliteTable("webdata_character", {
	id: integer("id").primaryKey().notNull(),
	name: text("name"),
	lastLogin: integer("last_login"),
	lastSeen: integer("last_seen"),
});

export const webdataServers = sqliteTable("webdata_servers", {
	id: integer("id").notNull(),
	name: text("name"),
	connected: integer("connected").default(0).notNull(),
});

export const zone = sqliteTable("zone", {
	shortName: text("short_name"),
	id: integer("id").primaryKey().notNull(),
	fileName: text("file_name"),
	longName: text("long_name").notNull(),
	mapFileName: text("map_file_name"),
	safeX: real("safe_x").default(0).notNull(),
	safeY: real("safe_y").default(0).notNull(),
	safeZ: real("safe_z").default(0).notNull(),
	safeHeading: real("safe_heading").default(0).notNull(),
	graveyardId: real("graveyard_id").default(0).notNull(),
	minLevel: integer("min_level").default(0).notNull(),
	minStatus: integer("min_status").default(0).notNull(),
	zoneidnumber: integer("zoneidnumber").default(0).notNull(),
	timezone: integer("timezone").default(0).notNull(),
	maxclients: integer("maxclients").default(0).notNull(),
	ruleset: integer("ruleset").default(0).notNull(),
	note: text("note"),
	underworld: real("underworld").default(0).notNull(),
	minclip: real("minclip").default(450).notNull(),
	maxclip: real("maxclip").default(450).notNull(),
	fogMinclip: real("fog_minclip").default(450).notNull(),
	fogMaxclip: real("fog_maxclip").default(450).notNull(),
	fogBlue: integer("fog_blue").default(0).notNull(),
	fogRed: integer("fog_red").default(0).notNull(),
	fogGreen: integer("fog_green").default(0).notNull(),
	sky: integer("sky").default(1).notNull(),
	ztype: integer("ztype").default(1).notNull(),
	zoneExpMultiplier: text("zone_exp_multiplier").default(0.00).notNull(),
	gravity: real("gravity").default(0.4).notNull(),
	timeType: integer("time_type").default(2).notNull(),
	fogRed1: integer("fog_red1").default(0).notNull(),
	fogGreen1: integer("fog_green1").default(0).notNull(),
	fogBlue1: integer("fog_blue1").default(0).notNull(),
	fogMinclip1: real("fog_minclip1").default(450).notNull(),
	fogMaxclip1: real("fog_maxclip1").default(450).notNull(),
	fogRed2: integer("fog_red2").default(0).notNull(),
	fogGreen2: integer("fog_green2").default(0).notNull(),
	fogBlue2: integer("fog_blue2").default(0).notNull(),
	fogMinclip2: real("fog_minclip2").default(450).notNull(),
	fogMaxclip2: real("fog_maxclip2").default(450).notNull(),
	fogRed3: integer("fog_red3").default(0).notNull(),
	fogGreen3: integer("fog_green3").default(0).notNull(),
	fogBlue3: integer("fog_blue3").default(0).notNull(),
	fogMinclip3: real("fog_minclip3").default(450).notNull(),
	fogMaxclip3: real("fog_maxclip3").default(450).notNull(),
	fogRed4: integer("fog_red4").default(0).notNull(),
	fogGreen4: integer("fog_green4").default(0).notNull(),
	fogBlue4: integer("fog_blue4").default(0).notNull(),
	fogMinclip4: real("fog_minclip4").default(450).notNull(),
	fogMaxclip4: real("fog_maxclip4").default(450).notNull(),
	fogDensity: real("fog_density").default(0).notNull(),
	flagNeeded: text("flag_needed").default('').notNull(),
	canbind: integer("canbind").default(1).notNull(),
	cancombat: integer("cancombat").default(1).notNull(),
	canlevitate: integer("canlevitate").default(1).notNull(),
	castoutdoor: integer("castoutdoor").default(1).notNull(),
	hotzone: integer("hotzone").default(0).notNull(),
	shutdowndelay: integer("shutdowndelay").default(5000).notNull(),
	peqzone: integer("peqzone").default(1).notNull(),
	expansion: integer("expansion").default(0).notNull(),
	suspendbuffs: integer("suspendbuffs").default(0).notNull(),
	rainChance1: integer("rain_chance1").default(0).notNull(),
	rainChance2: integer("rain_chance2").default(0).notNull(),
	rainChance3: integer("rain_chance3").default(0).notNull(),
	rainChance4: integer("rain_chance4").default(0).notNull(),
	rainDuration1: integer("rain_duration1").default(0).notNull(),
	rainDuration2: integer("rain_duration2").default(0).notNull(),
	rainDuration3: integer("rain_duration3").default(0).notNull(),
	rainDuration4: integer("rain_duration4").default(0).notNull(),
	snowChance1: integer("snow_chance1").default(0).notNull(),
	snowChance2: integer("snow_chance2").default(0).notNull(),
	snowChance3: integer("snow_chance3").default(0).notNull(),
	snowChance4: integer("snow_chance4").default(0).notNull(),
	snowDuration1: integer("snow_duration1").default(0).notNull(),
	snowDuration2: integer("snow_duration2").default(0).notNull(),
	snowDuration3: integer("snow_duration3").default(0).notNull(),
	snowDuration4: integer("snow_duration4").default(0).notNull(),
	type: integer("type").default(0).notNull(),
	skylock: integer("skylock").default(0).notNull(),
	skipLos: integer("skip_los").default(0).notNull(),
	music: integer("music").default(0).notNull(),
	randomLoc: integer("random_loc").default(3).notNull(),
	dragaggro: integer("dragaggro").default(0).notNull(),
	neverIdle: integer("never_idle").default(0).notNull(),
	castdungeon: integer("castdungeon").default(0).notNull(),
	pullLimit: integer("pull_limit").default(80).notNull(),
	graveyardTime: integer("graveyard_time").default(1).notNull(),
	maxZ: real("max_z").default(10000).notNull(),
},
(table) => {
	return {
		zonename: index("zone_zonename").on(table.shortName),
		zoneidnumber: index("zone_zoneidnumber").on(table.zoneidnumber),
	}
});

export const zoneserverAuth = sqliteTable("zoneserver_auth", {
	host: text("host").default('').primaryKey().notNull(),
	note: text("note"),
});

export const zonePoints = sqliteTable("zone_points", {
	id: integer("id").primaryKey().notNull(),
	zone: text("zone"),
	number: integer("number").default(1).notNull(),
	y: real("y").default(0).notNull(),
	x: real("x").default(0).notNull(),
	z: real("z").default(0).notNull(),
	heading: real("heading").default(0).notNull(),
	targetY: real("target_y").default(0).notNull(),
	targetX: real("target_x").default(0).notNull(),
	targetZ: real("target_z").default(0).notNull(),
	targetHeading: real("target_heading").default(0).notNull(),
	targetZoneId: integer("target_zone_id").default(0).notNull(),
	clientVersionMask: integer("client_version_mask").default(4294967295).notNull(),
},
(table) => {
	return {
		newIndex: index("zone_points_NewIndex").on(table.number, table.zone),
	}
});

export const zoneServer = sqliteTable("zone_server", {
	name: text("name").default('').primaryKey().notNull(),
	address: text("address").notNull(),
	port: integer("port").default(0).notNull(),
	playerCount: integer("player_count").default(0).notNull(),
	lastAlive: text("last_alive").default(current_timestamp()).notNull(),
	rain: text("rain").default(0).notNull(),
});

export const zoneStateDump = sqliteTable("zone_state_dump", {
	zonename: text("zonename").default('').primaryKey().notNull(),
	spawn2Count: integer("spawn2_count").default(0).notNull(),
	npcCount: integer("npc_count").default(0).notNull(),
	npclootCount: integer("npcloot_count").default(0).notNull(),
	gmspawntypeCount: integer("gmspawntype_count").default(0).notNull(),
	spawn2: blob("spawn2"),
	npcs: blob("npcs"),
	npcLoot: blob("npc_loot"),
	gmspawntype: blob("gmspawntype"),
	time: text("time").default(current_timestamp()).notNull(),
});
*/

export type Faction = InferModel<typeof factionList>;
export type Item = InferModel<typeof items>;
export type Npc = InferModel<typeof npcTypes>;
export type Race = InferModel<typeof races>;
export type Spell = InferModel<typeof spellsNew>;
